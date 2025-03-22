const { response } = require("express");
const { validationResult } = require("express-validator");
const db = require("../../src/models");
const { Op, Sequelize, Transaction } = require("sequelize");
const sequelize = require("../../src/config/connect-db");

class NotificationController {
  static async getNotification(req, res) {
    res.locals.session = req.session;

    var notifications = await db.notification.findAll({
      where: {
        deletedAt: null,
      },
    });

    res.render("z_layout/layout", {
      body: "../thongbao/ds_thongbao",
      noti: notifications,
    });
  }

  static async getNotificationDetail(req, res) {
    var notification = await db.notification.findOne({
      include: [
        {
          model: db.user,
          as: "user",
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    if (!notification) {
      res.status(404).json({
        message: "Không tìm thấy thông báo",
        isSuccess: false,
      });
    }

    res.status(200).json({
      message: "Lấy chi tiết thông báo thành công",
      isSuccess: true,
      notification,
    });
  }

  static async getProductsByName(req, res) {
    var products = await db.productn.findAll({
      where: {
        name: {
          [Op.like]: "%" + req.body.key + "%",
        },
      },
    });

    if (!products) {
      res.status(404).json({
        isSuccess: false,
        message: "Không tìm thấy sản phẩm!",
      });
    }

    res.status(200).json({
      isSuccess: true,
      products,
    });
  }

  static async addNotification(req, res) {
    // const t = await sequelize.transaction();
    var u_id = req.session.u_id;

    const { title, content, type } = req.body; // Lấy dữ liệu từ form

    console.log(title);
    return;

    // Kiểm tra dữ liệu
    if (!title || !content) {
      return res.status(400).json({ message: "Vui lòng nhập đủ thông tin" });
    }

    // Lưu vào database (ví dụ dùng Sequelize)
    const newThongBao = await ThongBao.create({
      title,
      content,
      type: type ? 1 : 0, // Checkbox nếu được check sẽ là "1"
      u_id,
    });

    res.status(200).json({
      data: newThongBao,
      isSuccess: true,
      message: "Thêm thông báo thành công!",
    });

    try {
      const result = await db.notification.create(newData);

      // await t.commit();
      res.status(200).json({
        data: result,
        isSuccess: true,
        message: "Thêm thông báo thành công!",
      });
    } catch (error) {
      // await t.rollback();
      console.log("Thao tác lỗi, đã rollback");
    }
  }
}

module.exports = NotificationController;
