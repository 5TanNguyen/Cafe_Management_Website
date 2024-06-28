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
const LichController = require('../controllers/LichController');
const ViController = require('../controllers/ViController');
const PhienGiaoDichController = require('../controllers/PhienGiaoDichController');
const { checkPermission } = require('../middlewares/checkPermission');
const TruyCapTraiPhepController = require('../controllers/TruyCapTraiPhepController');

require('./Sequelize/Customer/api');
const middlewareController = require('../controllers/Sequelize/middlewareController');
const customerController = require('../controllers/Sequelize/CustomerController');
const authController = require('../controllers/Sequelize/AuthController');
const productnController = require('../controllers/Sequelize/ProductnController');
const cartController = require('../controllers/Sequelize/CartController');
const orderController = require('../controllers/Sequelize/OrderController');

router.get("/5tan", (req, res, next)=>
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
router.post("/chinhgiasanpham",sanphamController.chinhgiaSanPham);
router.post("/themgiasanpham", sanphamController.themgiaSanPham);
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
router.get("/nhanvien", nhanvienController.getAllNhanVien);
router.post("/themnhanvien", nhanvienController.addNhanVien);
router.post("/suanhanvien", nhanvienController.editNhanVien);
router.post("/xoanhanvien", nhanvienController.deleteNhanVien);
router.post("/chamcong", nhanvienController.postChamCong);
router.get("/donnhap", donnhapController.getDonNhap);
router.post("/taodonnhap", donnhapController.createDonNhap);
router.get("/chitietdonnhap", donnhapController.getChiTietDonNhap);
router.post("/themchitietdonnhap", donnhapController.createChiTietDonNhap);
router.post("/xachnhannhanhang", NguyenLieuController.updateNguyenLieu);
router.get("/cachphache", PhaCheController.getCachPhaCheById);
router.get("/chichsuacachphache", PhaCheController.getEditPhaCheForm)
router.post("/suacachphache", PhaCheController.PostEditPhaChe)
router.post("/themcachphache", PhaCheController.addCachPhaChe);
router.post("/themchitietphache", PhaCheController.addChiTietPhaChe);
router.get("/xoachitietphache", PhaCheController.deleteChiTietPhaChe);
router.get("/nguyenlieu", NguyenLieuController.getNguyenLieu);
router.post("/themnguyenlieu", NguyenLieuController.addNguyenLieu);
router.post("/suanguyenlieu", NguyenLieuController.editNguyenLieu);
router.post("/trunguyenlieu", NguyenLieuController.MinusNguyenLieu);
router.post("/themgianguyenlieu", NguyenLieuController.themgiaNguyenLieu);
router.post("/chinhgianguyenlieu", NguyenLieuController.chinhgiaNguyenLieu);
router.get("/thongke", ThongKeController.getThongKe);
// router.get("/chitietthongke", ThongKeController.getChiTietThongKe);
router.post("/taothongke", ThongKeController.createThongKe);
router.post("/thongketheongay", ThongKeController.getThongKeTheoNgay);
router.get("/phiphatsinh", PhiPhatSinhController.getPhiPhatSinh);
router.post("/themphiphatsinh", PhiPhatSinhController.addPhiPhatSinh);
router.get("/danh-sach-cho-pha-che", PhaCheController.getDSChoPhaChe);
router.get("/chitietdondatpc", DonDatController.getChiTietDonDatPC);
router.get("/phachexong", PhaCheController.getPhaCheXong);
router.get("/lich", LichController.getLich);
router.post("/taolich", LichController.createLich);
router.get("/chitietlich", LichController.getChiTietLich);
router.post('/taochitietlich', LichController.createChiTietLich);
router.post("/taochitietlichtudong", LichController.createChiTietLichTuDong);
router.post('/xoachitietlich', LichController.deleteChiTietLich);
router.get('/dangkilichh', LichController.dangkiLich);
router.get('/vi', ViController.getViByUserId);
router.post('/themvi', ViController.addVi);
router.post('/taodonrut', PhienGiaoDichController.createDonRut);
router.get('/ds_donrut', PhienGiaoDichController.getAllDonRutChuaDuyet);
router.get('/duyetdonrut', PhienGiaoDichController.duyetDonRut);
router.get('/truycaptraiphep', TruyCapTraiPhepController.getTCTP);
router.post('/thongkesolanTCTP', TruyCapTraiPhepController.getThongKeTheoSoLanTCTP);
router.post('/hinhthucphat', TruyCapTraiPhepController.postHinhThucPhat);
router.get('/socket', banController.testSocket);


// Sequelize
router.get('/customer-list', customerController.getAllCustomer);
router.get('/customer/:id', customerController.getCustomerById);
router.put('/customer-update/:id', customerController.updateCustomer);
router.put('/customer-delete/:id', customerController.deleteCustomer);

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/api/Pets/list', middlewareController.verifyToken, productnController.getProducts);
router.get('/api/Pets/GetById/:id', middlewareController.verifyToken, productnController.getProductDetail);
router.post('/api/Pets/Add', middlewareController.verifyToken, productnController.addProdcut);
router.put('/api/Pets/Update/:id', middlewareController.verifyToken, productnController.updateProdcut);
router.put('/api/Pets/Delete/:id', middlewareController.verifyToken,productnController.deleteProdcut);
router.put('/api/Pets/Hide/:id', middlewareController.verifyToken, productnController.hideProduct);
router.post('/api/Pets/GetByName', middlewareController.verifyToken, productnController.getProductsByName);
router.get('/api/Pets/GetPrice/:id', middlewareController.verifyToken, productnController.getProductPrice);

//Cart
router.post('/cart-add', middlewareController.verifyToken ,cartController.createCart);
router.get('/cart-list/:id', middlewareController.verifyToken, cartController.getCarts);

router.post('/order-add', orderController.createOrder);
router.get('/order-list', orderController.getOrders);
module.exports=router