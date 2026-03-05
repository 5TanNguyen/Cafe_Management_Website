const db = require('../config/mydb')

class NhanVienModel {
    static async getNhanVienByUsername(usrn, pwd) {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
                + " WHERE u_username = ?"
                + " AND u_password = ?", [usrn, pwd], (error, result) => {
                    if (!error)
                        resolve(result)
                    else
                        resolve(false)
                })
        })
    }

    static async getNhanVienById(u_id) {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
                + " WHERE u_id = ?", [u_id], (error, result) => {
                    if (!error)
                        resolve(result)
                    else
                        resolve(false)
                })
        })
    }

    static async getNhanVienByEmail(email) {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
                + " WHERE email = ?", [email], (error, result) => {
                    if (!error)
                        resolve(result)
                    else
                        resolve(false)
                })
        })
    }

    static async getQuyen(id) {
        return new Promise(resolve => {
            db.query("SELECT * FROM user_roles"
                + " LEFT JOIN roles ON roles.role_id = user_roles.role_id"
                + " LEFT JOIN role_permissions ON roles.role_id = role_permissions.role_id"
                + " LEFT JOIN permissions ON role_permissions.permission_id = permissions.permission_id"
                + " WHERE user_roles.user_id = ?", [id], (error, result) => {
                    if (!error)
                        resolve(result);
                    else
                        resolve(false);
                }
            )
        })
    }

    static async GetAllNhanVien() {
        return new Promise(resolve => {
            db.query("SELECT * FROM duties d, "
                + "(SELECT * FROM users u "
                + "LEFT JOIN wallet w "
                + "ON u.u_id = w.w_u_id) usr "
                + "WHERE usr.u_d_id = d.d_id "
                + "AND usr.u_state = 1", [], (error, result) => {
                    if (!error)
                        resolve(result);
                    else
                        resolve(false);
                })
        })
    }

    static async GetAllChucVu() {
        return new Promise(resolve => {
            db.query("SELECT *"
                + " FROM duties", [], (error, result) => {
                    if (!error)
                        resolve(result);
                    else
                        resolve(false);
                })
        })
    }

    static async AddNhanVien(u_username, u_password, u_name, u_address, u_phone, u_d_id) {
        return new Promise(resolve => {
            db.query("INSERT INTO users"
                + " VALUES(NULL, ?, ?, ?, ?, ?, ?, 1)", [u_username, u_password, u_name, u_address, u_phone, u_d_id], (error, result) => {
                    if (!error)
                        resolve(true);
                    else
                        resolve(false);
                })
        })
    }

    static async EditNhanVien(u_id, u_name, u_address, u_phone, u_d_id) {
        return new Promise(resolve => {
            db.query("UPDATE users"
                + " SET u_name = ?,"
                + " u_address = ?,"
                + " u_phone = ?,"
                + " u_d_id = ?"
                + " WHERE u_id = ?", [u_name, u_address, u_phone, u_d_id, u_id], (error, result) => {
                    if (!error)
                        resolve(true);
                    else
                        resolve(false);
                })
        })
    }

    static async DeleteNhanVien(u_id) {
        return new Promise(resolve => {
            db.query("UPDATE users"
                + " SET u_state = 0"
                + " WHERE u_id = ?", [u_id], (error, result) => {
                    if (!error)
                        resolve(true);
                    else
                        resolve(false);
                })
        })
    }


}

module.exports = NhanVienModel