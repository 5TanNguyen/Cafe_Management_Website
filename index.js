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

// initWebRoutes(app);

// Sequelize
require("./src/config/connect-db");
const db = require("./src/models");
// END Sequelize

// server.listen(5555, ()=>
//     {
//         console.log('Server is running by 5tan');
//     }
// )

const mydb = require("./config/mydb");
const cors = require("cors");
const { incr, expire, ttl } = require("./helpers/limiter");

const session = require("express-session");
var flush = require("connect-flash");
// var path = require('path');
require("./babel.config");

const pdf = require("html-pdf");
const fs = require("fs");
const options = { format: "A4" };
const optionA6 = { format: "A6" };
const jwt = require("jsonwebtoken");

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

app.get("/user/:user", function (req, res) {
  req.session.name = req.params.user;
  res.send('<p>Session  Set: <a href="/ban">DS Bàn</a>');
});

app.get("/user", function (req, res) {
  res.send(req.session.name);
});

// XỬ LÝ ĐĂNG NHẬP LƯU SESSION
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

app.get("/tables", (req, res) => {
  mydb.query("SELECT * FROM tn408.duties;", (err, rows, fields) => {
    if (!err) console.log(rows);
    else console.log(err);
  });
});

app.get("/dangnhap", async function (req, res) {
  req.flash("message", "");

  if (req.session.role_id == 1) {
    res.locals.session = req.session;

    var stt = await ThongKeModel.GetThongKe();

    if (stt) {
      req.flash("message", "Đăng nhập thành công !");
      res.render("thongke/ds_thongke", {
        test: stt,
        message: req.flash("message"),
      });
    } else res.send("Data Not Found");
  } else if (req.session.role_id == 2) {
    res.locals.session = req.session;
    if (!req.session.u_id) {
      res.redirect("/dangnhap");
    } else {
      var dsc = await DonDatModel.GetDSChoPhaChe();

      res.render("phache/ds_chophache", { dsc });
    }
  } else if (req.session.role_id == 3) {
    var results = await BanModel.getbans();
    var stt = await ThongKeModel.GetThongKe();
    var br = await ChiNhanhModel.GetChiNhanh();
    if (results)
      res.render("ban/ds_ban", {
        test: results,
        usrn: req.session.u_email,
        stt,
        br,
      });
  } else
    res.render("../views/dangnhap/dangnhap", { message: req.flash("message") });
});

// JWT

// let refreshTokens = [];

// app.post('/login', async (req, res) =>{
//     // Authentication

//     // Authorization
//     const data = req.body;
//     console.log({data});
//     const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '30s',
//     });

//     // Chưa sử dụng được
//     const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET);
//     refreshTokens.push(refreshToken);
//     // Chưa sử dụng được

//     res.json({ accessToken, refreshToken});
// })

app.post("/logout", (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
  res.sendStatus(200);
});

app.get("/emp", authenToken, async (req, res) => {
  const nv = await NhanVienModel.GetAllNhanVien();
  res.json({ nv });
});

function authenToken(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  // 'Beaer [token]'
  const token = authorizationHeader.split(" ")[1];
  if (!token) res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    console.log(err, data);
    if (err) res.sendStatus(403);
    next();
  });
}

// END JWT

app.post("/dangnhap", async function (req, res) {
  var u_email = req.body.u_email;
  var u_password = req.body.u_password;

  var x = await NhanVienModel.getNhanVienByUsername(u_email, u_password);

  if (x == false) {
    req.session.u_name = null;
    req.session.u_id = null;
    req.session.u_email = null;
    req.session.role_id = null;

    res.render("dangnhap/error.ejs");
    console.log("Sai tt đăng nhập");
  } else {
    if (x[0].u_state == 0) {
      req.flash("message", "Tài khoản của bạn bị vô hiệu hóa !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    req.session.u_name = x[0].firstName;
    req.session.u_id = x[0].id;
    req.session.role_id = x[0].role_id;

    req.session.u_email = req.body.u_email;

    var stt = await ThongKeModel.GetThongKe();

    req.session.s_id = stt[0].s_id;
    req.session.s_name = stt[0].s_name;

    var branch = [];
    branch = await ChiNhanhModel.GetChiNhanh();
    req.session.br_id = [];
    req.session.br_id = branch.br_id;
    req.session.br_name = [];
    req.session.br_name = branch.br_name;

    // var cd = await LichModel.GetChiTietLichByCURDATE_u_id(x[0].u_id);

    // if(cd == false){
    //     req.session.cd_id = 'KHÔNG CÓ LỊCH LÀM';
    //     req.session.cd_shift_id = 'KHÔNG';
    //     req.session.hours = 'KHÔNG';

    // }
    // else if(cd[0].cd_check == 1)
    // {
    //     req.session.cd_id = 'ĐÃ CHẤM CÔNG';
    //     req.session.cd_shift_id = 'KHÔNG';
    //     req.session.hours = 'KHÔNG';
    //     req.session.cd_check = cd[0].cd_check;
    // }
    // else {
    //     req.session.cd_id = cd[0].cd_id;
    //     req.session.cd_shift_id = cd[0].cd_shift_id;
    //     req.session.hours = cd[0].hours;
    //     req.session.cd_check = cd[0].cd_check;
    // }

    // res.locals.session = req.session;

    if (x[0] != null) {
      const data = req.body;
      console.log({ data });
      const accessToken = jwt.sign(
        data,
        process.env.ACCESS_TOKEN_SECRET
        // ,
        // {
        // expiresIn: '30s',
        // }
      );

      console.log("accessToken: " + accessToken);

      if (x[0].role_id == 1) {
        res.locals.session = req.session;

        var stt = await ThongKeModel.GetThongKe();

        if (stt) {
          req.flash("message", "Đăng nhập thành công !");
          res.render("z_layout/layout", {
            test: stt,
            message: req.flash("message"),
            body: "../thongke/ds_thongke",
          });
        } else res.send("Data Not Found");
      } else if (x[0].role_id == 2) {
        res.locals.session = req.session;
        if (!req.session.u_id) {
          res.redirect("/dangnhap");
        } else {
          var dsc = await DonDatModel.GetDSChoPhaChe();

          res.render("z_layout/layout", {
            dsc,
            body: "../phache/ds_chophache",
          });
        }
      } else if (x[0].role_id == 3) {
        var results = await BanModel.getbans();
        var stt = await ThongKeModel.GetThongKe();
        var br = await ChiNhanhModel.GetChiNhanh();
        var dd = await DonDatModel.getAllDonDat();
        if (results)
          res.render("z_layout/layout", {
            test: results,
            usrn: req.session.u_email,
            stt,
            br,
            dd,
            body: "../ban/ds_ban",
          });
      }
    } else {
      res.render("dangnhap/error.ejs");
    }
  }
});

app.get("/dangxuat", function (req, res) {
  req.session.destroy();

  var message = "";
  res.render("dangnhap/dangnhap", { message });
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

app.post("/them-san-pham", upload.single("image"), async (req, res, next) => {
  res.locals.session = req.session;

  if (!req.session.u_id || req.session.role_id != 1) {
    var currentdate = new Date();
    var datetime =
      currentdate.getFullYear() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getDate() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    var tctp = await TruyCapTraiPhepModel.addTCTP(
      req.session.u_id,
      "Thêm sản phẩm",
      datetime
    );

    req.flash("message", "Bạn không có quyền truy cập !");
    res.render("dangnhap/dangnhap", { message: req.flash("message") });
  } else {
    var sp_ten = req.body.pro_name;
    var sp_gia = req.body.pro_pp_id;
    var sp_loai = req.body.pro_pt_id;
    var sp_mota = req.body.pro_description;
    var sp_phache = req.body.pro_b_id;
    var sp_img = req.file.originalname;

    var x = await SanPhamModel.add_SanPham(
      sp_ten,
      0,
      sp_mota,
      sp_img,
      sp_loai,
      sp_gia,
      sp_phache
    );

    if (x == true) {
      var results = await SanPhamModel.getsanphams();

      if (results) res.redirect("/sanpham");
    } else res.send("Add failed");
  }
});

app.post("/thanhtoanmobile", async function (req, res) {
  var o_id = req.body.o_id;
  var o_t_id = req.body.o_t_id;

  var s_id = req.body.s_id;
  var o_cost = req.body.o_cost;

  DonDatModel.set_StatusOrder(o_id);

  BanModel.set_T_Pay(o_t_id);

  ThongKeModel.UpdateDoanhThu(s_id, o_cost);

  DonDatModel.SetOrder_MergingById(o_id);

  DonDatModel.SetTable_MergingById(o_id);

  var dd = await DonDatModel.chitietdondat(o_id);
});

app.get("/chitietthongke", async function (req, res) {
  res.locals.session = req.session;

  var s_id = req.query.s_id;

  var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

  var o = await DonDatModel.GetDonDatByS_ID(s_id);

  var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

  var stt = await ThongKeModel.GetThongKeById(s_id);

  var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);

  var br = await ChiNhanhModel.GetChiNhanh();

  res.render("thongke/chitietthongke", { tk, o, ib, stt, s_id, pps, br });
});

app.post("/thongketheongay_chinhanh", async function (req, res) {
  res.locals.session = req.session;

  var s_id = req.body.s_id;
  var br_id = req.body.br_id;

  if (br_id == 0) {
    res.redirect("chitietthongke?s_id=" + s_id);
  }

  var tk = await ChamCongModel.GetChamCongByS_Id_And_br_id(s_id, br_id);

  var o = await DonDatModel.GetDonDatByS_ID_And_br_id(s_id, br_id);

  var ib = await DonNhapModel.GetDonNhapByS_Id_and_br_id(s_id, br_id);

  var stt = await ThongKeModel.GetThongKeById(s_id);

  var pps = await PhiPhatSinhModel.GetPhiPhatSinhById_and_br_id(s_id, br_id);

  var br = await ChiNhanhModel.GetChiNhanh();

  res.render("thongke/chitietthongke_chinhanh", {
    tk,
    o,
    ib,
    stt,
    s_id,
    pps,
    br,
  });
});

app.get("/chitietthongkepdf", async (req, res) => {
  res.locals.session = req.session;

  var s_id = req.query.s_id;

  var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

  var o = await DonDatModel.GetDonDatByS_ID(s_id);

  var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

  var stt = await ThongKeModel.GetThongKeById(s_id);
  var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);

  res.render(
    "thongke/chitietthongkepdf",
    { tk, o, ib, stt, pps },
    function (err, html) {
      pdf
        .create(html, options)
        .toFile(
          "./views/thongke/pdf/chitietthongkepdf" + s_id + ".pdf",
          function (err, result) {
            if (err) {
              return console.log(err);
            } else {
              console.log(res);
              var dataFile = fs.readFileSync(
                "./views/thongke/pdf/chitietthongkepdf" + s_id + ".pdf"
              );
              res.header("content-type", "application/pdf");
              res.send(dataFile);
            }
          }
        );
    }
  );
});

app.get("/thongketheongaypdf", async (req, res) => {
  res.locals.session = req.session;

  var date_begin = req.query.db;

  var date_end = req.query.de;

  // res.send(date_begin);

  // console.log(date_end)

  var result = await ThongKeModel.GetThongKeTheoNgay(date_begin, date_end);

  var dd = await ThongKeModel.GetThongKeTheoNgayDonDat(date_begin, date_end);

  var dn = await ThongKeModel.GetThongKeTheoNgayDonNhap(date_begin, date_end);

  var cc = await ThongKeModel.GetThongKeTheoNgayNhanVien(date_begin, date_end);

  var pps = await ThongKeModel.GetThongKeTheoNgayPhiPhatSinh(
    date_begin,
    date_end
  );
  res.render(
    "thongke/thongketheongaypdf",
    { test: result, dn, dd, cc, date_begin, date_end, pps },
    function (err, html) {
      pdf
        .create(html, options)
        .toFile(
          "./views/thongke/pdf/thongketheongaypdf" +
            date_begin +
            "_" +
            date_end +
            ".pdf",
          function (err, result) {
            if (err) {
              return console.log(err);
            } else {
              console.log(res);
              var dataFile = fs.readFileSync(
                "./views/thongke/pdf/thongketheongaypdf" +
                  date_begin +
                  "_" +
                  date_end +
                  ".pdf"
              );
              res.header("content-type", "application/pdf");
              res.send(dataFile);
            }
          }
        );
    }
  ); //
});

app.get("/dsban", async (req, res) => {
  var dsban = await BanModel.getbanMobile();
  var stt = await ThongKeModel.GetLastThongKe();
  res.send(dsban);
  //res.send({ dsban, stt});
});

app.get("/dssban", async (req, res) => {
  var dsban = await BanModel.getbanMobile();
  var stt = await ThongKeModel.GetLastThongKe();
  //res.send(dsban);
  res.send({ dsban, stt });
});

app.get("/dssanpham", async (req, res) => {
  var dssanpham = await SanPhamModel.getsanphams();
  res.send(dssanpham);
});

app.get("/ds_dondat", async (req, res) => {
  var ds_dondat = await DonDatModel.GetDonDat();
  res.send(ds_dondat);
});

app.post("/ds_dondat/add", async (req, res) => {
  var o_t_id = req.body.o_t_id;
  var o_number = req.body.o_number;
  var o_br_id = req.body.o_br_id;
  // DonDatModel.createdondat(1, 1, t_id, num, 0, 0, 0, 0, o_time, s_id);

  var s_id = await ThongKeModel.GetLastThongKe();

  var dd = await DonDatModel.createdondat(
    1,
    1,
    o_t_id,
    o_number,
    0,
    1,
    0,
    0,
    null,
    17,
    o_br_id
  );
  DonDatModel.setStatusDonDat(o_t_id);

  if (dd) {
    res.redirect("/ds_dondat");
  }
});

app.post("/ds_dondat/edit", async (req, res) => {
  var o_id = req.body.o_id;
  var o_t_id = req.body.o_t_id;
  var o_t_id_old = req.body.o_t_id_old;
  var o_number = req.body.o_number;
  var order = await DonDatModel.UpdateDonDat(o_id, o_t_id, o_number);
  BanModel.set_t_empty_0(o_t_id);
  BanModel.set_StatusTable(o_t_id_old);

  res.redirect("/ds_dondat");
});

app.post("/themchitietdondat_OD", async (req, res) => {
  var od_o_id = req.body.o_id;
  var od_pro_id = req.body.od_pro_id;
  var od_quantity = req.body.od_quantity;
  var od_price = req.body.od_price;
  var o_cost = req.body.o_cost;

  DonDatModel.AddChiTietDonDat(od_o_id, od_pro_id, od_quantity, od_price);

  var o_cost_new = parseInt(o_cost) + parseInt(od_price) * od_quantity;
  DonDatModel.setCost(o_cost_new, od_o_id);

  res.redirect("/ds_dondat");
});

app.get("/chitietdondatt", async (req, res) => {
  var dd_id = req.query.o_id;

  var result = await DonDatModel.chitietdondat(dd_id);

  res.send(result);
});

app.get("/chitietdondatt/delete", async (req, res) => {
  var od_id = req.query.od_id;
  var od_o_id = req.query.od_o_id;
  var od_price = req.query.od_price;
  var o_cost = req.query.o_cost;

  var new_cost = parseInt(o_cost) - parseInt(od_price);
  DonDatModel.setCost(new_cost, od_o_id);

  var dd = await DonDatModel.DeleteOD(od_id);

  if (dd) {
    res.redirect("/chitietdondatt?o_id=" + od_o_id);
  }
});

app.get("/getdondat", async (req, res) => {
  var t_id = req.query.t_id;

  var od = await DonDatModel.GetLastOrder(t_id);
  if (od) {
    res.send(od);
  }
  // res.send(t_id);
});

app.post("/gopban", async (req, res) => {
  var o_id_old = req.body.o_id_old;
  var o_id_new = req.body.o_id_new;
  var o_cost = req.body.o_cost;

  var cb = await DonDatModel.GopBan(o_id_old, o_id_new);
  var cbb = await DonDatModel.GopBan_Cost(o_cost, o_id_new);
  var cbbb = await DonDatModel.setCost(0, o_id_old);

  var om = await DonDatModel.Order_Merging(o_id_new, o_id_old);

  if (cb) {
    res.send("Successfully !");
  }
});

app.get("/getChamCong", async (req, res) => {
  var u_id = req.query.u_id;

  var cc = await ChamCongModel.GetChamCongByU_Id(u_id);

  if (cc) {
    res.send(cc);
  }
});

app.get("/getVi", async (req, res) => {
  var u_id = req.query.u_id;

  var vi = await ViModel.getViByUserId(u_id);

  res.send(vi);
});

app.get("/getPGD", async (req, res) => {
  var u_id = req.query.u_id;

  var tran = await PhienGiaoDichModel.getPGDByUserId(u_id);

  res.send(tran);
});

app.get("/getLich", async (req, res) => {
  var u_id = req.query.u_id;

  var cld = await LichModel.GetLichCURDATE();

  var cd = await LichModel.GetChiTietLich(cld[0].cld_id);

  res.send(cd);
});

app.get("/dangkiLich", async (req, res) => {
  var u_id = req.query.u_id;
  var cd_id = req.query.cd_id;

  var cld = await LichModel.DangKiLich(u_id, cd_id);
});

app.get("/indonrut", async (req, res) => {
  var tran_id = req.query.tran_id;

  var pgd = await PhienGiaoDichModel.GetPGDById(tran_id);

  res.render("vi/donrutpdf", { pgd }, function (err, html) {
    pdf
      .create(html, optionA6)
      .toFile(
        "./views/vi/pdf/donrut" + tran_id + ".pdf",
        function (err, result) {
          if (err) {
            return console.log(err);
          } else {
            console.log(res);
            var dataFile = fs.readFileSync(
              "./views/vi/pdf/donrut" + tran_id + ".pdf"
            );
            res.header("content-type", "application/pdf");
            res.send(dataFile);
          }
        }
      );
  });
});

app.get("/nav", (req, res) => {
  res.render("dangnhap/nav");
});

// app.use(rout)
initWebRoutes(app);

server.listen(5555, () => {
  console.log("Server is running by 5tan");
});
