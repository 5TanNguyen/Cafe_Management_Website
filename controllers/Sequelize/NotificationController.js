const { response } = require("express");
const { validationResult } = require("express-validator");
const db = require("../../src/models");
const { Op } = require("sequelize");

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

  static async addProdcut(req, res) {
    let product = {
      name: req.body.code,
      description: req.body.description,
      stock: req.body.stock,
      state: true,
      category_id: req.body.category_id,
      code: req.body.code,
      birthday: Date.now(),
    };

    var new_product = await db.productn.create(product);

    res.status(200).json({
      message: `Thêm thành công sản phẩm ${req.body.name}`,
      isSuccess: true,
      new_product,
    });
  }

  static async updateProdcut(req, res) {
    let product = {
      name: req.body.name,
      description: req.body.description,
      stock: req.body.stock,
      state: req.body.state,
    };

    var updated_product = await db.productn.update(product, {
      where: { id: req.params.id },
    });

    if (!updated_product) {
      res.status(500).json({
        message: `Không cập nhật được sản phẩm`,
        isSuccess: false,
      });
    }

    res.status(200).json({
      message: `Cập nhật thành công sản phẩm`,
      isSuccess: true,
      updated_product,
    });
  }

  static async hideProduct(req, res) {
    var _product = await db.productn.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!_product) {
      res.status(500).json({
        message: "Không tìm thấy sản phẩm",
        isSuccess: false,
      });
    }

    if (_product.state == true) {
      let hide_product = {
        state: false,
      };

      var product = await db.productn.update(hide_product, {
        where: { id: req.params.id },
      });
    } else {
      let state_product = {
        state: true,
      };

      var product = await db.productn.update(state_product, {
        where: { id: req.params.id },
      });
    }

    res.status(200).json({
      message: "Ẩn thành công sản phẩm",
      isSuccess: true,
      product,
    });
  }

  static async deleteProdcut(req, res) {
    let deleted_product = {
      deleted: true,
    };

    var product = await db.productn.update(deleted_product, {
      where: { id: req.params.id },
    });

    if (!product) {
      res.status(500).json({
        message: "Không xóa được sản phẩm",
        isSuccess: false,
      });
    }

    res.status(200).json({
      message: "Xóa thành công sản phẩm",
      isSuccess: true,
      product,
    });
  }

  static async getProductPrice(req, res) {
    var product_price = await db.productPrice.findOne({
      where: {
        productn_id: req.params.id,
      },
    });

    if (!product_price) {
      res.status(404).json({
        message: "Không tìm thấy giá sản phẩm",
        isSuccess: false,
      });
    }

    res.send(product_price);
  }
}

module.exports = NotificationController;
