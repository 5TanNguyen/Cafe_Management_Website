const db = require("../config/mydb");

class NhanVienModel {
  static async getNhanVienByUsername(email, pwd) {
    return new Promise((resolve) => {
      db.query(
        "SELECT users.*, roles.value as rolename " +
          "FROM users " +
          "LEFT JOIN user_roles ON users.id = user_roles.user_id " +
          "LEFT JOIN roles ON user_roles.role_id = roles.id " +
          "WHERE users.email = ? " +
          "AND users.password = ?",
        [email, pwd],
        (error, result) => {
          if (error) {
            console.error("Error in query:", error);
            resolve(false);
          } else if (result.length === 0) {
            console.log("No matching records found.");
            resolve(false);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static async getQuyen(email, pwd) {
    return new Promise((resolve) => {
      db.query(
        "SELECT permissions.name as permissionname, permissions.description as permissiondescription, permissions.icon as permissionicon, permissions.url as permissionurl " +
          "FROM users " +
          "LEFT JOIN user_roles ON users.id = user_roles.user_id " +
          "LEFT JOIN roles ON user_roles.role_id = roles.id " +
          "LEFT JOIN role_permissions ON roles.id = role_permissions.role_id " +
          "LEFT JOIN permissions ON role_permissions.permission_id = permissions.id " +
          "WHERE users.email = ? " +
          "AND users.password = ?",
        [email, pwd],
        (error, result) => {
          if (!error) resolve(result);
          else resolve(false);
        }
      );
    });
  }

  static async getNhanVienById(u_id) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM `users`" + " WHERE u_id = ?",
        [u_id],
        (error, result) => {
          if (!error) resolve(result);
          else resolve(false);
        }
      );
    });
  }

  // static async GetAllNhanVien()
  // {
  //     return new Promise(resolve=>{
  //         db.query("SELECT *"
  //         +        " FROM users u, duties d"
  //         +        " WHERE u.u_d_id = d.d_id"
  //         +        " AND u.u_state = 1", [], (error, result)=>{
  //             if(!error)
  //                 resolve(result);
  //             else
  //                 resolve(false);
  //         })
  //     })
  // }

  static async GetAllNhanVien() {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM duties d, " +
          "(SELECT * FROM users u " +
          "LEFT JOIN wallet w " +
          "ON u.u_id = w.w_u_id) usr " +
          "WHERE usr.u_d_id = d.d_id " +
          "AND usr.u_state = 1",
        [],
        (error, result) => {
          if (!error) resolve(result);
          else resolve(false);
        }
      );
    });
  }

  static async GetAllChucVu() {
    return new Promise((resolve) => {
      db.query("SELECT *" + " FROM duties", [], (error, result) => {
        if (!error) resolve(result);
        else resolve(false);
      });
    });
  }

  static async AddNhanVien(
    u_username,
    u_password,
    u_name,
    u_address,
    u_phone,
    u_d_id
  ) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO users" + " VALUES(NULL, ?, ?, ?, ?, ?, ?, 1)",
        [u_username, u_password, u_name, u_address, u_phone, u_d_id],
        (error, result) => {
          if (!error) resolve(true);
          else resolve(false);
        }
      );
    });
  }

  static async EditNhanVien(u_id, u_name, u_address, u_phone, u_d_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE users" +
          " SET u_name = ?," +
          " u_address = ?," +
          " u_phone = ?," +
          " u_d_id = ?" +
          " WHERE u_id = ?",
        [u_name, u_address, u_phone, u_d_id, u_id],
        (error, result) => {
          if (!error) resolve(true);
          else resolve(false);
        }
      );
    });
  }

  static async DeleteNhanVien(u_id) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE users" + " SET u_state = 0" + " WHERE u_id = ?",
        [u_id],
        (error, result) => {
          if (!error) resolve(true);
          else resolve(false);
        }
      );
    });
  }
}

module.exports = NhanVienModel;
