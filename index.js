const express = require('express')
const mydb = require('./config/db')
const app = express();
const rout = require("./routes/router")

const session = require('express-session')
// var path = require('path');

const bodyparser = require("body-parser")
const pdf = require('html-pdf');
const fs = require('fs');
const options = {format:'A4'};
const optionA6 = {format:'A6'};


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: "5tan_app"
}));

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


app.get('/dangnhap', async function(req, res){

    if(req.session.u_username){
        //res.send(req.session.u_username);

        res.locals.session = req.session;
        var results  = await BanModel.getbans();
        var stt = await ThongKeModel.GetThongKe();

                    if(results)
                        res.render('ban/ds_ban', {test : results, stt}); //, usrn : req.session.u_username});
    }
    else
        res.render('../views/dangnhap/dangnhap');
})
app.post('/dangnhap',async function(req, res){
        var u_username = req.body.u_username;
        var u_password = req.body.u_password;

        // req.session.u_username = req.body.u_username;

        // res.locals.session = req.session;

        var x = await NhanVienModel.getNhanVienByUsername(u_username, u_password);
        
        req.session.u_name = x[0].u_name;
        req.session.u_id = x[0].u_id;
        req.session.u_username = req.body.u_username;

        // THÊM MỚI

        var stt = await ThongKeModel.GetThongKe();

        req.session.s_id = stt[0].s_id;
        req.session.s_name = stt[0].s_name;


        // END THÊM MỚI

        res.locals.session = req.session;

        
        if( x[0] != null) 
        {
            if(x[0].u_d_id == 1)
            {
                res.locals.session = req.session;

                // var date_begin = req.body.date_begin;
        
                // var date_end = req.body.date_end;
        
                // // res.send(date_begin);
        
                // // console.log(date_end)
        
                // var result = await ThongKeModel.GetThongKeTheoNgay(date_begin, date_end);
        
                // var dd = await ThongKeModel.GetThongKeTheoNgayDonDat(date_begin, date_end);
        
                // var dn = await ThongKeModel.GetThongKeTheoNgayDonNhap(date_begin, date_end);
        
                // var cc = await ThongKeModel.GetThongKeTheoNgayNhanVien(date_begin, date_end);
        
                // var pps = await ThongKeModel.GetThongKeTheoNgayPhiPhatSinh(date_begin, date_end);
                // if(result != null)
                // {
                //     res.render("thongke/thongketheongay", {test : result, dn, dd, cc, date_begin,date_end, pps});
                // }

                var stt = await ThongKeModel.GetThongKe();

                if(stt)
                {
                    res.render("thongke/ds_thongke", { test : stt})
                    //res.send(stt);
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
                if(results)
                    res.render('ban/ds_ban', {test : results, usrn : req.session.u_username, stt}); 
            }
            
        }      
        else
        {
            res.render('dangnhap/error.ejs');
        }
})

app.get('/dangxuat', function(req, res){
    req.session.destroy();
    res.render('dangnhap/dangnhap');
})

app.post("/thanhtoan", async function(req, res)
{
    res.locals.session = req.session;

    if(!req.session.u_id)
    {
        res.redirect("/dangnhap");
    }
    else
    {
        var o_id = req.body.o_id;
        var o_t_id = req.body.o_t_id;

        
        var s_id = req.body.s_id;
        var o_cost = req.body.o_cost;
    
        //res.send(s_id);
        DonDatModel.set_StatusOrder(o_id);

        BanModel.set_T_Pay(o_t_id);

        ThongKeModel.UpdateDoanhThu(s_id, o_cost);

        var dd = await DonDatModel.chitietdondat(o_id);

        // var result = await DonDatModel.getdondat(o_t_id);

        // if(result)
        //     // res.render("dondat/ds_dondat", {test : result, o_t_id});
        //     res.redirect("/chitietban?t_id=" + o_t_id);
        // else
        //     res.send("Failed")

        res.render('dondat/dondatpdf',  { dd }, function(err, html){
            pdf.create(html, optionA6).toFile('./views/dondat/pdf/dondatpdf.pdf', function(err, result){
                if(err){
                    return console.log(err);
                }
                else
                {
                    console.log(res);
                    var dataFile = fs.readFileSync('./views/dondat/pdf/dondatpdf.pdf');
                    res.header('content-type', 'application/pdf');
                    res.send(dataFile);
                }
            });
        })
    }
})

app.get('/chitietthongke', async function(req, res)
    {
        res.locals.session = req.session;

        var s_id = req.query.s_id;

        var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

        var o = await DonDatModel.GetDonDatByS_ID(s_id);

        var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

        var stt = await ThongKeModel.GetThongKeById(s_id);
        var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);

        res.render("thongke/chitietthongke", { tk, o, ib, stt, s_id, pps});
    }
)

// app.post('/chitietthongke', (req, res)=>{
//     res.render('thongke/chitietthongkepdf',  {prodit: req.body.profit}, function(err, html){
//         pdf.create(html, options).toFile('./views/thongke/pdf/chitietthongke.pdf', function(err, result){
//             if(err){
//                 return console.log(err);
//             }
//             else
//             {
//                 console.log(res);
//                 var dataFile = fs.readFileSync('./views/thongke/pdf/chitietthongke.pdf');
//                 res.header('content-type', 'application/pdf');
//                 res.send(dataFile);
//             }
//         });
//     })
// })

app.get('/chitietthongkepdf', async (req, res)=>{
    res.locals.session = req.session;

    var s_id = req.query.s_id;

    var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

    var o = await DonDatModel.GetDonDatByS_ID(s_id);

    var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

    var stt = await ThongKeModel.GetThongKeById(s_id);
    var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);


    res.render('thongke/chitietthongkepdf',  { tk, o, ib, stt, pps }, function(err, html){
        pdf.create(html, options).toFile('./views/thongke/pdf/chitietthongke.pdf', function(err, result){
            if(err){
                return console.log(err);
            }
            else
            {
                console.log(res);
                var dataFile = fs.readFileSync('./views/thongke/pdf/chitietthongke.pdf');
                res.header('content-type', 'application/pdf');
                res.send(dataFile);
            }
        });
    })
})

app.get("/thongketheongaypdf", async(req,  res)=>
{
    res.locals.session = req.session;

        var date_begin = req.query.db;

        var date_end = req.query.de;

        // res.send(date_begin);

        // console.log(date_end)

        var result = await ThongKeModel.GetThongKeTheoNgay(date_begin, date_end);

        var dd = await ThongKeModel.GetThongKeTheoNgayDonDat(date_begin, date_end);

        var dn = await ThongKeModel.GetThongKeTheoNgayDonNhap(date_begin, date_end);

        var cc = await ThongKeModel.GetThongKeTheoNgayNhanVien(date_begin, date_end);

        var pps = await ThongKeModel.GetThongKeTheoNgayPhiPhatSinh(date_begin, date_end);
        res.render('thongke/thongketheongaypdf',  { test : result, dn, dd, cc, date_begin,date_end, pps }, function(err, html){
            pdf.create(html, options).toFile('./views/thongke/pdf/thongketheongaypdf.pdf', function(err, result){
                if(err){
                    return console.log(err);
                }
                else
                {
                    console.log(res);
                    var dataFile = fs.readFileSync('./views/thongke/pdf/thongketheongaypdf.pdf');
                    res.header('content-type', 'application/pdf');
                    res.send(dataFile);
                }
            });
        })
})

app.use(rout)

app.listen(5555, ()=>
    {
        console.log('Server is running by 5tan');
    }
)