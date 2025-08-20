const express = require("express");
const mydb = require("./config/db");
const app = express();
const rout = require("./routes/router");

const session = require("express-session");
var flush = require("connect-flash");
// var path = require('path');

const bodyparser = require("body-parser");
const pdf = require("html-pdf");
const fs = require("fs");
const options = { format: "A4" };
const optionA6 = { format: "A6" };
const jwt = require("jsonwebtoken");
const dotevn = require("dotenv");

dotevn.config();

// SOCKET.IO
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const { availableParallelism } = require("node:os");
const cluster = require("node:cluster");
const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

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

app.get("/dangnhap", async function (req, res) {
  req.flash("message", "");

  if (req.session.u_d_id == 1) {
    res.locals.session = req.session;

    var stt = await ThongKeModel.GetThongKe();

    if (stt) {
      req.flash("message", "Đăng nhập thành công !");
      res.render("thongke/ds_thongke", {
        test: stt,
        message: req.flash("message"),
      });
    } else res.send("Data Not Found");
  } else if (req.session.u_d_id == 2) {
    res.locals.session = req.session;
    if (!req.session.u_id) {
      res.redirect("/dangnhap");
    } else {
      var dsc = await DonDatModel.GetDSChoPhaChe();

      res.render("phache/ds_chophache", { dsc });
    }
  } else if (req.session.u_d_id == 3) {
    var results = await BanModel.getbans();
    var stt = await ThongKeModel.GetThongKe();
    var br = await ChiNhanhModel.GetChiNhanh();
    if (results)
      res.render("ban/ds_ban", {
        test: results,
        usrn: req.session.u_username,
        stt,
        br,
      });
  } else
    res.render("../views/dangnhap/dangnhap", { message: req.flash("message") });
});

// JWT

// LƯU VÀO DỮ LIỆU BẢNG
let refreshTokens = [];

app.post("/refreshToken", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403);
    console.log(
      "55555555555555555555555555555555555555555555555if(!refreshTokens.includes(refreshToken))"
    );
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
    console.log(err, data);
    if (err) {
      res.sendStatus(403);
      console.log("55555555555555555555555555555555555555jwt.verify");
    }
    const accessToken = jwt.sign(
      { username: data.username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    res.json({ accessToken });
  });
});

app.post("/login", (req, res) => {
  const data = req.body;
  console.log({ data });
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });

  // Chưa sử dụng được
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  // Chưa sử dụng được

  res.json({ accessToken, refreshToken });
});

app.post("/logout", (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
  res.sendStatus(200);
});

// END JWT

app.use(rout);

const httpServer = app.listen(5500, () => {
  console.log("Server is running at PORT 5500");
});
