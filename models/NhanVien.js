const db = require('../config/db')

class NhanVienModel{
    static async getNhanVienByUsername(usrn, pwd)
    {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
            + " WHERE u_username = ?"
            + " AND u_password = ?", [usrn, pwd], (error, result)=>{
                if(!error)
                    resolve(result)
            })
        })
    }


}

module.exports = NhanVienModel