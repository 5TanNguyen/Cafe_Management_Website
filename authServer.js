const express = require('express')
const mydb = require('./config/db')
const app = express();
const rout = require("./routes/router")

const session = require('express-session')
var flush = require('connect-flash');
// var path = require('path');

const bodyparser = require("body-parser")
const pdf = require('html-pdf');
const fs = require('fs');
const options = {format:'A4'};
const optionA6 = {format:'A6'};
const jwt = require('jsonwebtoken');
const dotevn = require ('dotenv');

dotevn.config();

// SOCKET.IO
const {createServer} = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { availableParallelism } = require('node:os');
const cluster = require('node:cluster');
const { createAdapter, setupPrimary } = require('@socket.io/cluster-adapter');

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static('public'))

// app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: "5tan_app",
    cookie: { maxAge: 3600000},
    resave: false,
    saveUninitialized: false
}));

app.use(flush());

app.get('/user/:user', function(req, res){
    req.session.name = req.params.user;
    res.send('<p>Session  Set: <a href="/ban">DS Bàn</a>');
});

app.get('/user', function(req, res){
    res.send(req.session.name);
})


// XỬ LÝ ĐĂNG NHẬP LƯU SESSION 
const NhanVienModel = require('./models/NhanVien');
const BanModel = require('./models/Ban');
const ThongKeModel = require('./models/ThongKe');
const ChamCongModel = require('./models/ChamCong');
const DonDatModel = require('./models/DonDat');
const DonNhapModel = require('./models/DonNhap');
const e = require('express');
const req = require('express/lib/request');
const PhiPhatSinhModel = require('./models/PhiPhatSinh');
const res = require('express/lib/response');
const SanPhamModel = require('./models/SanPham');
const ChiNhanhModel = require('./models/ChiNhanh');
const LichModel = require('./models/Lich');
const ViModel = require('./models/Vi');
const PhienGiaoDichModel = require('./models/PhienGiaoDich');
const TinNhanModel = require('./models/TinNhan');

app.get('/dangnhap', async function(req, res){

    req.flash('message', '');

    if(req.session.u_d_id == 1)
    {
        res.locals.session = req.session;

        var stt = await ThongKeModel.GetThongKe();

        if(stt)
        {
            req.flash('message', 'Đăng nhập thành công !');
            res.render("thongke/ds_thongke", { test : stt, message : req.flash('message')})
        }
        else
            res.send("Data Not Found");
    }
    else if(req.session.u_d_id == 2)
    {
        res.locals.session = req.session;
        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {
            var dsc = await DonDatModel.GetDSChoPhaChe();

            res.render("phache/ds_chophache", { dsc });
        }            }
    else if(req.session.u_d_id == 3)
    {
        var results  = await BanModel.getbans();
        var stt = await ThongKeModel.GetThongKe();
        var br = await ChiNhanhModel.GetChiNhanh();
        if(results)
            res.render('ban/ds_ban', {test : results,
                                    usrn : req.session.u_username,
                                    stt,
                                    br }); 
    }

    else
        res.render('../views/dangnhap/dangnhap', {message : req.flash('message')});
})

// JWT

// LƯU VÀO DỮ LIỆU BẢNG
let refreshTokens = [];

app.post('/refreshToken', (req, res) =>{
    const refreshToken = req.body.token;
    if(!refreshToken) res.sendStatus(401);
    if(!(refreshTokens.includes(refreshToken))) 
    {
        res.sendStatus(403);
        console.log('55555555555555555555555555555555555555555555555if(!refreshTokens.includes(refreshToken))')
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) =>{
        console.log(err, data);
        if(err)
        {
            res.sendStatus(403);
            console.log('55555555555555555555555555555555555555jwt.verify');
        }
        const accessToken = jwt.sign(
            { username: data.username }, 
            process.env.ACCESS_TOKEN_SECRET, 
            {
                expiresIn: '30s',
            }
        );
        res.json({ accessToken });
    })
});

app.post('/login', (req, res) =>{
    
    const data = req.body;
    console.log({data});
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { 
        expiresIn: '30s',
    });

    // Chưa sử dụng được
    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    // Chưa sử dụng được
    
    res.json({ accessToken, refreshToken});
})

// END JWT

app.post('/dangnhap',async function(req, res){

    var u_username = req.body.u_username;
    var u_password = req.body.u_password;

    var x = await NhanVienModel.getNhanVienByUsername(u_username, u_password);
    
    if(x == false){
        req.session.u_name = null;
        req.session.u_id = null;
        req.session.u_username = null;
        req.session.u_d_id = null;

        res.render("dangnhap/error.ejs");
        console.log('Sai tt đăng nhập');
    }else{
        if(x[0].u_state == 0)
        {
            req.flash('message', 'Tài khoản của bạn bị vô hiệu hóa !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')})
        }

        req.session.u_name = x[0].u_name;
        req.session.u_id = x[0].u_id;
        req.session.u_d_id = x[0].u_d_id;

        req.session.u_username = req.body.u_username;
        

        var stt = await ThongKeModel.GetThongKe();
        req.session.s_id = stt[0].s_id;
        req.session.s_name = stt[0].s_name;

        var branch = [];
        branch = await ChiNhanhModel.GetChiNhanh();
        req.session.br_id = []
        req.session.br_id = branch.br_id;
        req.session.br_name = []
        req.session.br_name = branch.br_name;
        
        var cd = await LichModel.GetChiTietLichByCURDATE_u_id(x[0].u_id);

        if(cd == false){
            req.session.cd_id = 'KHÔNG CÓ LỊCH LÀM';
            req.session.cd_shift_id = 'KHÔNG';
            req.session.hours = 'KHÔNG';
            
        }
        else if(cd[0].cd_check == 1)
        {
            req.session.cd_id = 'ĐÃ CHẤM CÔNG';
            req.session.cd_shift_id = 'KHÔNG';
            req.session.hours = 'KHÔNG';
            req.session.cd_check = cd[0].cd_check;
        }
        else {
            req.session.cd_id = cd[0].cd_id;
            req.session.cd_shift_id = cd[0].cd_shift_id;
            req.session.hours = cd[0].hours;
            req.session.cd_check = cd[0].cd_check;
        }

        res.locals.session = req.session;
        
        if( x[0] != null) 
        {
            if(x[0].u_d_id == 1)
            {
                res.locals.session = req.session;

                var stt = await ThongKeModel.GetThongKe();

                if(stt)
                {
                    req.flash('message', 'Đăng nhập thành công !');
                    res.render("thongke/ds_thongke", { test : stt, message : req.flash('message')})
                }
                else
                    res.send("Data Not Found");
            }
            else if(x[0].u_d_id == 2)
            {
                res.locals.session = req.session;
                if(!req.session.u_id)
                {
                    res.redirect("/dangnhap");
                }
                else
                {
                    var dsc = await DonDatModel.GetDSChoPhaChe();
        
                    res.render("phache/ds_chophache", { dsc });
                }            }
            else if(x[0].u_d_id == 3)
            {
                var results  = await BanModel.getbans();
                var stt = await ThongKeModel.GetThongKe();
                var br = await ChiNhanhModel.GetChiNhanh();
                if(results)
                    res.render('ban/ds_ban', {test : results,
                                            usrn : req.session.u_username,
                                            stt,
                                            br }); 
            }
            
        }      
        else
        {
            res.render('dangnhap/error.ejs');
        }
    }
})

app.get('/dangxuat', function(req, res){
    req.session.destroy();

    var message = '';
    res.render('dangnhap/dangnhap', {message});
})


app.use(rout)

const httpServer = app.listen(5500, ()=>
    {
        console.log('Server is running at PORT 5500');
    }
)