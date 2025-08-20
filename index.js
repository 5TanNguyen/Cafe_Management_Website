import express from "express";
const bodyparser = require("body-parser");
const viewEngine = require("./config/viewEngine");
import initWebRoutes from "./routes/router";
require("dotenv").config();

const app = express();

// config app

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
viewEngine(app);

require("./src/config/connect-db");
const db = require("./src/models");
const mydb = require("./config/mydb");
const cors = require("cors");
const { incr, expire, ttl } = require("./utils/limiter");

const NhanVienModel = require("./models/NhanVien");
const BanModel = require("./models/Ban");
const ThongKeModel = require("./models/ThongKe");
const ChamCongModel = require("./models/ChamCong");
const DonDatModel = require("./models/DonDat");
const DonNhapModel = require("./models/DonNhap");
const e = require("express");
const req = require("express/lib/request");
const PhiPhatSinhModel = require("./models/PhiPhatSinh");
const res = require("express/lib/response");
const SanPhamModel = require("./models/SanPham");
const ChiNhanhModel = require("./models/ChiNhanh");
const LichModel = require("./models/Lich");
const ViModel = require("./models/Vi");
const PhienGiaoDichModel = require("./models/PhienGiaoDich");
const TinNhanModel = require("./models/TinNhan");
const checkNumberAccess = require("./middlewares/checkNumberAccess");

const session = require("express-session");
var flush = require("connect-flash");
// var path = require('path');
require("./babel.config");

const pdf = require("html-pdf");
const fs = require("fs");
const options = { format: "A4" };
const optionA6 = { format: "A6" };

const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:5555/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google profile:", profile);

        let email = profile.emails && profile.emails[0].value;
        let user = await NhanVienModel.getNhanVienByEmail(email);
        if (!user) {
          return done(null, false, {
            message: "Không tìm thấy tài khoản trong hệ thống",
          });
        }

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // Ở đây anh có thể lưu user.id hoặc toàn bộ user
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Nếu anh chỉ lưu user.id ở serializeUser thì cần truy DB ở đây để lấy lại
  done(null, user);
});

// THÊM ẢNH
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images/product");
  },
  filename: (req, file, cb) => {
    console.log(file);
    // cb(null, Date.now() + path.extname(file.originalname))
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// END THÊM ẢNH

// adding socket.io configuration
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`USER CONNECTED: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", async (data) => {
    console.log("Server + ");
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
    // socket.to(data.room).emit("receive_message",
    // await db.message.findAll({})
    // );
  });

  socket.on("send_order", async (data) => {
    console.log("Server + ");
    console.log(data);
    socket.to(data.room).emit("receive_order", data);
    // socket.to(data.room).emit("receive_message",
    // await db.message.findAll({})
    // );
  });

  socket.on("send_cart", async (data) => {
    console.log("Server Cart + ");
    console.log(data);
    socket.to(data.room).emit("receive_cart", data);
    // socket.to(data.room).emit("receive_message",
    // await db.message.findAll({})
    // );
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED", socket.id);
  });
});

app.use(cors());

// app.set('views', path.join(__dirname, 'views'));

app.use(
  session({
    secret: "5tan_app",
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flush());

// OAuth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      console.error(">> Lỗi xác thực:", err);
      return res.redirect("/dangnhap");
    }
    if (!user) {
      return res.redirect(
        "/dangxuat?error=" +
          encodeURIComponent(info?.message || "Đăng nhập thất bại")
      );
    } else if (user[0].status == 0) {
      return res.redirect(
        "/dangxuat?error=" + encodeURIComponent("Tài khoản bị khóa")
      );
    }

    // Đăng nhập user vào session
    req.logIn(user, async (err) => {
      if (err) {
        console.error(">> Lỗi khi login session:", err);
        return res.redirect("/dangnhap");
      }
      // console.log(">> Đăng nhập thành công:", user);

      req.session.u_id = user[0].id;
      req.session.u_email = user[0].email;
      req.session.image = user[0].image;
      req.session.firstName = user[0].firstName;
      req.session.rolename = user[0].rolename;

      var permission = await NhanVienModel.getQuyen(user[0].email);
      req.session.permission = permission.map((item) => ({
        permissionname: item.permissionname,
        permissiondescription: item.permissiondescription,
        permissionicon: item.permissionicon,
        permissionurl: item.permissionurl,
      }));
      console.log(req.session.permission);

      return res.redirect("/toi");
    });
  })(req, res, next);
});

// XỬ LÝ ĐĂNG NHẬP LƯU SESSION

// ZALOPAY //

const axios = require("axios").default; // npm install axios
const CryptoJS = require("crypto-js"); // npm install crypto-js
const moment = require("moment"); // npm install moment
const qs = require("qs");

// APP INFO
const config = {
  app_id: "2553",
  key1: "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
  key2: "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
  endpoint: "https://sb-openapi.zalopay.vn/v2/create",
};

app.locals.moment = moment;

app.post("/payment", async (req, res) => {
  const embed_data = {
    redirecturl: "http://localhost:3000/products/",
  };

  const items = [{}];
  const transID = Math.floor(Math.random() * 1000000);
  const order = {
    app_id: config.app_id,
    app_trans_id: `${moment().format("YYMMDD")}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
    app_user: "user123",
    app_time: Date.now(), // miliseconds
    item: JSON.stringify(items),
    embed_data: JSON.stringify(embed_data),
    amount: req.body.price,
    description: `Lazada - Payment for the order #${transID}`,
    bank_code: "",
    callback_url: "https://30cb-125-235-236-126.ngrok-free.app/callback",
  };

  // appid|app_trans_id|appuser|amount|apptime|embeddata|item
  const data =
    config.app_id +
    "|" +
    order.app_trans_id +
    "|" +
    order.app_user +
    "|" +
    order.amount +
    "|" +
    order.app_time +
    "|" +
    order.embed_data +
    "|" +
    order.item;
  order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  try {
    const result = await axios.post(config.endpoint, null, { params: order });
    console.log(result.data);

    // ORDER_URL //
    res.send(result.data.order_url);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/callback", (req, res) => {
  let result = {};

  try {
    let dataStr = req.body.data;
    let reqMac = req.body.mac;

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();
    console.log("mac =", mac);

    // kiểm tra callback hợp lệ (đến từ ZaloPay server)
    if (reqMac !== mac) {
      // callback không hợp lệ
      result.return_code = -1;
      result.return_message = "mac not equal";
    } else {
      // thanh toán thành công
      // merchant cập nhật trạng thái cho đơn hàng
      let dataJson = JSON.parse(dataStr, config.key2);
      console.log(
        "update order's status = success where app_trans_id =",
        dataJson["app_trans_id"]
      );

      result.return_code = 1;
      result.return_message = "success";
    }
  } catch (ex) {
    result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
    result.return_message = ex.message;
  }

  // thông báo kết quả cho ZaloPay server
  res.json(result);
});

app.post("/order-status/:app_trans_id", async (req, res) => {
  const app_trans_id = req.params.app_trans_id;

  let postData = {
    app_id: config.app_id,
    // app_trans_id: "<app_trans_id>", // Input your app_trans_id
    app_trans_id: app_trans_id, // Input your app_trans_id
  };

  let data = postData.app_id + "|" + postData.app_trans_id + "|" + config.key1; // appid|app_trans_id|key1
  postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  let postConfig = {
    method: "post",
    url: "https://sb-openapi.zalopay.vn/v2/query",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(postData),
  };

  try {
    const result = await axios(postConfig);
    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error.message);
  }
});

// END ZALOPAY //

app.get("/api", async (req, res, next) => {
  try {
    //get ip
    const getIpUser =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    var NA = await checkNumberAccess.getTtl(getIpUser);
    // console.log(req.headers['x-forwarded-for'], req.socket.remoteAddress);
    // const numRequest = await incr(getIpUser);

    // let _ttl;
    // if(NA.numRequest === 1){
    //     await expire(getIpUser, 60);
    //     _ttl = 60;
    // }
    // else if((await ttl(getIpUser)) === -1){
    //     await expire(getIpUser, 60);
    //     _ttl = 60;
    // }
    // else{
    //     _ttl = await ttl(getIpUser);
    // }

    if (NA.numRequest > 20) {
      res.status(503).json({
        status: "error",
        numRequest: NA.numRequest,
        _ttl: NA._ttl,
        messsage: "Server is busy",
      });
    } else {
      res.json({
        status: "success",
        numRequest: NA.numRequest,
        _ttl: NA._ttl,
        elements: [
          { id: 1, name: "5tan" },
          { id: 2, name: "9thoa" },
        ],
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

app.post("/thanhtoan", async function (req, res) {
  res.locals.session = req.session;

  if (!req.session.u_id) {
    res.redirect("/dangnhap");
  } else {
    var o_id = req.body.o_id;
    var o_t_id = req.body.o_t_id;

    var s_id = req.body.s_id;
    var o_cost = req.body.o_cost;

    DonDatModel.set_StatusOrder(o_id);

    BanModel.set_T_Pay(o_t_id);

    ThongKeModel.UpdateDoanhThu(s_id, o_cost);

    var dd = await DonDatModel.chitietdondat(o_id);

    res.render("dondat/dondatpdf", { dd }, function (err, html) {
      pdf
        .create(html, optionA6)
        .toFile(
          "./views/dondat/pdf/dondatpdf" + o_id + ".pdf",
          function (err, result) {
            if (err) {
              return console.log(err);
            } else {
              console.log(res);
              var dataFile = fs.readFileSync(
                "./views/dondat/pdf/dondatpdf" + o_id + ".pdf"
              );
              res.header("content-type", "application/pdf");
              res.send(dataFile);
            }
          }
        );
    });
  }
});

// app.use(rout)
initWebRoutes(app);

server.listen(5555, () => {
  console.log("Server is running by 5tan");
});
