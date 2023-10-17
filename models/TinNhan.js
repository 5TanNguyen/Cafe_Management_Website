const db = require('../config/db');

class TinNhanModel
{
    static async getAllMsg()
    {
        return new Promise(resolve=>{
            db.query("SELECT mess.id, u.u_id, u.u_name, mess.content"
            +        " FROM messages mess, users u"
            +        " WHERE mess.u_id = u.u_id"
            +        " ORDER BY mess.id ASC ", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
    
    static async addMsg(u_id, client_offset, msg)
    {
        return new Promise(resolve=>{
            db.query("INSERT INTO messages VALUES (NULL, ?, ?, ?)", [u_id, client_offset, msg], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
    
}

module.exports = TinNhanModel