const express = require('express');
const res = require('express/lib/response');
const SanPhamController = require('../controllers/SanPhamController');
const sanphamController = require("../controllers/SanPhamController")
const sanphamModel = require('../models/SanPham')
const banController = require('../controllers/BanController');
const dondatController = require('../controllers/DonDatController');
const dangnhapController = require('../controllers/DangNhapController');
const nhanvienController = require('../controllers/NhanVienController');
const donnhapController = require('../controllers/DonNhapController');
const router = require('express').Router();
const {check}=require("express-validator");
const NguyenLieuController = require('../controllers/NguyenLieuController');
const PhaCheController = require('../controllers/PhaCheController');
const NguyenLieuModel = require('../models/NguyenLieu');
const ThongKeController = require('../controllers/ThongKeController');
const PhiPhatSinhController = require('../controllers/PhiPhatSinhController');
const DonDatController = require('../controllers/DonDatController');

router.get("/", (req, res, next)=>
    {
        res.send("5tan");
    }
)

//router.get("/dangnhap", dangnhapController.GetDangNhapForm)
//router.post("/dangnhap", dangnhapController.DangNhap)


router.get("/sanpham", sanphamController.getAllSanPham)

router.get("/themsanpham", sanphamController.showAddSanPham)
router.post("/themsanpham", SanPhamController.addSanPham)

router.get("/xoasanpham", sanphamController.deleteSanPhamForm)
router.post("/xoasanpham", [check("pro_id").exists().withMessage("ID is required !").isNumeric().withMessage("ID should be  only number")], sanphamController.deleteSanPham)

router.get("/suasanpham", sanphamController.editSanPhamForm)
router.post("/suasanpham", sanphamController.editSanPham)

router.get("/ban", banController.getAllBan)

router.get("/songuoi", dondatController.getSoNguoi)
router.post("/songuoi", dondatController.confirmDonDat)

router.post("/themdondat", dondatController.createDonDat)

router.get("/xacnhandon", dondatController.confirmDon);

router.post("/themchitietdondat", dondatController.addChiTietDonDat)

router.get("/chitietban", dondatController.getDonDat)

router.get("/chitietdondat", dondatController.getChiTietDonDat)

// router.post("/thanhtoan", dondatController.setStatusOrder)

router.get("/bantrong", banController.setEmptyTable)

router.post("/chamcong", nhanvienController.postChamCong);

router.get("/donnhap", donnhapController.getDonNhap);

router.post("/taodonnhap", donnhapController.createDonNhap);

router.get("/chitietdonnhap", donnhapController.getChiTietDonNhap);

router.post("/themchitietdonnhap", donnhapController.createChiTietDonNhap);

router.post("/xachnhannhanhang", NguyenLieuController.updateNguyenLieu);

router.get("/cachphache", PhaCheController.getCachPhaCheById);

router.get("/chichsuacachphache", PhaCheController.getEditPhaCheForm)

router.post("/suacachphache", PhaCheController.PostEditPhaChe)

router.post("/themchitietphache", PhaCheController.addChiTietPhaChe);

router.get("/xoachitietphache", PhaCheController.deleteChiTietPhaChe);

router.get("/nguyenlieu", NguyenLieuController.getNguyenLieu);

router.post("/themnguyenlieu", NguyenLieuController.addNguyenLieu);

router.post("/suanguyenlieu", NguyenLieuController.editNguyenLieu);

router.post("/trunguyenlieu", NguyenLieuController.MinusNguyenLieu);

router.get("/thongke", ThongKeController.getThongKe);

// router.get("/chitietthongke", ThongKeController.getChiTietThongKe);

router.post("/taothongke", ThongKeController.createThongKe);

router.post("/thongketheongay", ThongKeController.getThongKeTheoNgay);

router.get("/phiphatsinh", PhiPhatSinhController.getPhiPhatSinh);

router.post("/themphiphatsinh", PhiPhatSinhController.addPhiPhatSinh);

router.get("/danh-sach-cho-pha-che", PhaCheController.getDSChoPhaChe);

router.get("/chitietdondatpc", DonDatController.getChiTietDonDatPC);

router.get("/phachexong", PhaCheController.getPhaCheXong);

module.exports=router