import express from "express";
let router = express.Router();

import homeController from "../controllers/homeController";

const res = require("express/lib/response");
const SanPhamController = require("../controllers/SanPhamController");
import sanphamController from "../controllers/SanPhamController";
const sanphamModel = require("../models/SanPham");
const banController = require("../controllers/BanController");
const dondatController = require("../controllers/DonDatController");
const dangnhapController = require("../controllers/DangNhapController");
const nhanvienController = require("../controllers/NhanVienController");
const donnhapController = require("../controllers/DonNhapController");
const { check } = require("express-validator");
const NguyenLieuController = require("../controllers/NguyenLieuController");
const PhaCheController = require("../controllers/PhaCheController");
const NguyenLieuModel = require("../models/NguyenLieu");
const ThongKeController = require("../controllers/ThongKeController");
const PhiPhatSinhController = require("../controllers/PhiPhatSinhController");
const DonDatController = require("../controllers/DonDatController");
const LichController = require("../controllers/LichController");
const ViController = require("../controllers/ViController");
const PhienGiaoDichController = require("../controllers/PhienGiaoDichController");
const { checkPermission } = require("../middlewares/checkPermission");
const TruyCapTraiPhepController = require("../controllers/TruyCapTraiPhepController");

require("./Sequelize/Customer/api");
const middlewareController = require("../controllers/Sequelize/middlewareController");
const customerController = require("../controllers/Sequelize/CustomerController");
const authController = require("../controllers/Sequelize/AuthController");
const productnController = require("../controllers/Sequelize/ProductnController");
const cartController = require("../controllers/Sequelize/CartController");
const orderController = require("../controllers/Sequelize/OrderController");
const toiController = require("../controllers/Sequelize/ToiController");
const quyenController = require("../controllers/Sequelize/QuyenController");
const noficicationController = require("../controllers/Sequelize/NotificationController");
const { canAccessPermission } = require("../middlewares/canAccessPermission");

let initWebRoutes = (app) => {
  router.get("/5tan", (req, res, next) => {
    res.send("5tan");
  });

  router.get("/dangnhap", dangnhapController.GetDangNhapForm);
  router.post("/dangnhap", dangnhapController.DangNhap);
  router.get("/dangxuat", dangnhapController.dangXuat);
  router.get("/helicopter", dangnhapController.heli);

  // Sản phẩm
  router.get(
    "/sanpham",
    canAccessPermission("getAllSanPham"),
    sanphamController.getAllSanPham
  );
  router.get("/themsanpham", sanphamController.showAddSanPham);
  router.post("/themsanpham", SanPhamController.addSanPham);
  router.get("/xoasanpham", sanphamController.deleteSanPhamForm);
  router.post(
    "/xoasanpham",
    [
      check("pro_id")
        .exists()
        .withMessage("ID is required !")
        .isNumeric()
        .withMessage("ID should be  only number"),
    ],
    sanphamController.deleteSanPham
  );
  router.get("/suasanpham", sanphamController.editSanPhamForm);
  router.post("/suasanpham", sanphamController.editSanPham);
  router.post("/chinhgiasanpham", sanphamController.chinhgiaSanPham);
  router.post("/themgiasanpham", sanphamController.themgiaSanPham);

  // Bàn
  router.get("/ban", banController.getAllBan);
  router.get("/songuoi", dondatController.getSoNguoi);
  router.post("/songuoi", dondatController.confirmDonDat);
  router.post("/themdondat", dondatController.createDonDat);
  router.get("/xacnhandon", dondatController.confirmDon);
  router.post("/themchitietdondat", dondatController.addChiTietDonDat);
  router.get("/chitietban", dondatController.getDonDat);
  router.get("/chitietdondat", dondatController.getChiTietDonDat);
  // router.post("/thanhtoan", dondatController.setStatusOrder)
  router.get("/bantrong", banController.setEmptyTable);

  // Nhânv viên
  router.get(
    "/nhanvien",
    canAccessPermission("getAllNhanVien"),
    nhanvienController.getAllNhanVien
  );
  router.post("/themnhanvien", nhanvienController.addNhanVien);
  router.post("/suanhanvien", nhanvienController.editNhanVien);
  router.post("/xoanhanvien", nhanvienController.deleteNhanVien);

  // Chấm công
  router.post("/chamcong", nhanvienController.postChamCong);

  // Đơn nhập
  router.get(
    "/donnhap",
    canAccessPermission("getDonNhap"),
    donnhapController.getDonNhap
  );
  router.post("/taodonnhap", donnhapController.createDonNhap);
  router.get("/chitietdonnhap", donnhapController.getChiTietDonNhap);
  router.post("/themchitietdonnhap", donnhapController.createChiTietDonNhap);
  router.post("/xachnhannhanhang", NguyenLieuController.updateNguyenLieu);

  // Pha chế
  router.get("/cachphache", PhaCheController.getCachPhaCheById);
  router.get("/chichsuacachphache", PhaCheController.getEditPhaCheForm);
  router.post("/suacachphache", PhaCheController.PostEditPhaChe);
  router.post("/themcachphache", PhaCheController.addCachPhaChe);
  router.post("/themchitietphache", PhaCheController.addChiTietPhaChe);
  router.get("/xoachitietphache", PhaCheController.deleteChiTietPhaChe);

  // Nguyên liệu
  router.get("/nguyenlieu", NguyenLieuController.getNguyenLieu);
  router.post("/themnguyenlieu", NguyenLieuController.addNguyenLieu);
  router.post("/suanguyenlieu", NguyenLieuController.editNguyenLieu);
  router.post("/trunguyenlieu", NguyenLieuController.MinusNguyenLieu);
  router.post("/themgianguyenlieu", NguyenLieuController.themgiaNguyenLieu);
  router.post("/chinhgianguyenlieu", NguyenLieuController.chinhgiaNguyenLieu);

  // Thống kê
  router.get(
    "/thongke",
    canAccessPermission("getThongKe"),
    ThongKeController.getThongKe
  );
  // router.get("/chitietthongke", ThongKeController.getChiTietThongKe);
  router.post("/taothongke", ThongKeController.createThongKe);
  router.post("/thongketheongay", ThongKeController.getThongKeTheoNgay);

  // Phí phát sinh
  router.get("/phiphatsinh", PhiPhatSinhController.getPhiPhatSinh);
  router.post("/themphiphatsinh", PhiPhatSinhController.addPhiPhatSinh);

  // DS pha chế
  router.get("/danhsachchophache", PhaCheController.getDSChoPhaChe);
  router.get("/chitietdondatpc", DonDatController.getChiTietDonDatPC);
  router.get("/phachexong", PhaCheController.getPhaCheXong);

  // Lịch
  router.get("/lich", LichController.getLich);
  router.post("/taolich", LichController.createLich);
  router.get("/chitietlich", LichController.getChiTietLich);
  router.post("/taochitietlich", LichController.createChiTietLich);
  router.post("/taochitietlichtudong", LichController.createChiTietLichTuDong);
  router.post("/xoachitietlich", LichController.deleteChiTietLich);
  router.get("/dangkilichh", LichController.dangkiLich);

  // Ví
  router.get("/vi", ViController.getViByUserId);
  router.post("/themvi", ViController.addVi);
  router.post("/taodonrut", PhienGiaoDichController.createDonRut);
  router.get("/ds_donrut", PhienGiaoDichController.getAllDonRutChuaDuyet);
  router.get("/duyetdonrut", PhienGiaoDichController.duyetDonRut);
  router.get("/truycaptraiphep", TruyCapTraiPhepController.getTCTP);
  router.post(
    "/thongkesolanTCTP",
    TruyCapTraiPhepController.getThongKeTheoSoLanTCTP
  );
  router.post("/hinhthucphat", TruyCapTraiPhepController.postHinhThucPhat);
  router.get("/socket", banController.testSocket);

  // Tôi
  router.get("/toi", toiController.getTrangCaNhan);

  // Sequelize
  router.get("/user-permission-list", quyenController.getUserPermissions);
  router.get("/permission-list", quyenController.getPermissions);
  router.get("/customer-list", customerController.getAllCustomer);
  router.get("/customer/:id", customerController.getCustomerById);
  router.put("/customer-update/:id", customerController.updateCustomer);
  router.put("/customer-delete/:id", customerController.deleteCustomer);

  router.post("/register", authController.register);
  router.post("/login", authController.login);

  router.get(
    "/api/Pets/list",
    middlewareController.verifyToken,
    productnController.getProducts
  );
  router.get(
    "/api/Pets/GetById/:id",
    middlewareController.verifyToken,
    productnController.getProductDetail
  );
  router.post(
    "/api/Pets/Add",
    middlewareController.verifyToken,
    productnController.addProdcut
  );
  router.put(
    "/api/Pets/Update/:id",
    middlewareController.verifyToken,
    productnController.updateProdcut
  );
  router.put(
    "/api/Pets/Delete/:id",
    middlewareController.verifyToken,
    productnController.deleteProdcut
  );
  router.put(
    "/api/Pets/Hide/:id",
    middlewareController.verifyToken,
    productnController.hideProduct
  );
  router.post(
    "/api/Pets/GetByName",
    middlewareController.verifyToken,
    productnController.getProductsByName
  );
  router.get(
    "/api/Pets/GetPrice/:id",
    middlewareController.verifyToken,
    productnController.getProductPrice
  );

  router.post(
    "/cart-add",
    middlewareController.verifyToken,
    cartController.createCart
  );
  router.get(
    "/cart-list/:id",
    middlewareController.verifyToken,
    cartController.getCarts
  );

  router.post("/order-add", orderController.createOrder);
  router.get("/order-list", orderController.getOrders);

  // Notifications
  router.get("/thong-bao", noficicationController.getNotification);
  router.get(
    "/thong-bao-chi-tiet/:id",
    noficicationController.getNotificationDetail
  );

  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.geteditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  //Cart
  router.post(
    "/cart-add",
    middlewareController.verifyToken,
    cartController.createCart
  );
  router.get(
    "/cart-list/:id",
    middlewareController.verifyToken,
    cartController.getCarts
  );

  return app.use("/", router);
};

module.exports = initWebRoutes;
