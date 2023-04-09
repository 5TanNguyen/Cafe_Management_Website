const db = require('../config/db')

class DonDatModel{
    static async getdondat(dd_maban)
    {
        return new Promise(resolve =>{
            db.query("Select o.o_id, o.o_status, o.o_post, o.o_cost, o.o_tick, s.s_id, s.s_name"
            + " FROM orders o, statistical s"
            + " where o.o_s_id = s.s_id" 
            + " AND o_t_id = ?"
            + " ORDER BY o.o_id DESC"
            , [dd_maban], (error, result)=>{
                if(!error)    resolve(result);
            })

            // db.query("Select * From dondat" +
            // " where dd_maban = ?" +
            // " and dd_id = (Select MAX(dd_id) from dondat where dd_maban = ?)", [b_id, b_id], (error, result)=>{
            //     if(!error)    resolve(result);
            // })

            // db.query("Select distinct dondat.dd_id, dondat.dd_maban, chitietdondat.ctdd_soluong, chitietdondat.ctdd_giatien, sanpham.sp_ten"
            // + " From dondat, chitietdondat, sanpham"
            // + " where dondat.dd_id = chitietdondat.ctdd_madd"
            // + " and chitietdondat.ctdd_masp = sanpham.sp_id"
            // + " and dondat.dd_maban = ?" 
            // + " ORDER BY chitietdondat.ctdd_id DESC", [b_id], (error, result)=>{
            //     if(!error)    resolve(result);
            // })
        })
    }

    static async GetDSChoPhaChe()
    {
        // return new Promise(resolve =>{
        //     db.query("SELECT o.o_id, o.o_t_id, o.o_tick, o.o_time, od.od_id, pro.pro_name "
        //     + " FROM orders o, order_detail od, products pro"
        //     + " WHERE o.o_id = od.od_o_id"
        //     + " AND od.od_pro_id = pro.pro_id"
        //     + " AND o.o_post = 1"
        //     + " AND o.o_tick = 0"
        //     + " ORDER BY o.o_id DESC", [], (err, result)=>{
        //         if(!err)
        //             resolve(result);
        //     })
        // })

        return new Promise(resolve =>{
            db.query("SELECT *"
            + " FROM orders"
            + " WHERE o_post = 1"
            + " AND o_tick = 0"
            + " ORDER BY o_id DESC", [], (err, result)=>{
                if(!err)
                    resolve(result);
            })
        })
    }

    static async SetPhaCheXong(o_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE orders"
            + " SET o_tick = 1"
            + " WHERE o_id = ?", [o_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetDonDatById(o_id)
    {
        return new Promise(resolve =>{
            db.query("Select * From orders"
            + " where o_id = ?", [o_id], (error, result)=>{
                if(!error)    resolve(result);
            })
        })
    }

    static async chitietdondat(dd_id)
    {
        return new Promise(resolve =>{
            db.query("Select od.od_id, od.od_o_id, od.od_pro_id, pro.pro_name, pro.pro_price, od.od_quantity, od.od_price, o.o_cost, o.o_time"
            + " from orders o,  order_detail od, products pro" //, bartending b, bartending_detail bd, ingredient ing"
            + " where od.od_pro_id = pro.pro_id"
            + " and o.o_id = od.od_o_id"
            // + " and pro.pro_b_id = b.b_id"
            // + " and b.b_id = bd.bd_b_id"
            // + " and bd.bd_ing_id = ing.ing_id"
            + " and od.od_o_id = ?", [dd_id], (error, result)=>{
                if(!error)  resolve(result);
            })

            // db.query("Select chitietdondat.ctdd_id, chitietdondat.ctdd_masp, sanpham.sp_ten"
            // + " from chitietdondat, sanpham"
            // + " where chitietdondat.ctdd_masp = sanpham.sp_id"
            // + " and chitietdondat.ctdd_madd = ?", [dd_id], (error, result)=>{
            //     if(!error)  resolve(result);
            // })
        })
    }

    static async AddChiTietDonDat(od_o_id, od_pro_id, od_quantity, od_price)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO order_detail(od_id, od_o_id, od_pro_id, od_quantity, od_price)"
            + " VALUES(NULL, ?, ?, ?, ?)", [od_o_id, od_pro_id, od_quantity, od_price], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async cratedondatForm()
    {
        
        return new Promise(resolve =>{
            db.query("SELECT * FROM sanpham",[],(error , result)=>{

                if(!error)
                resolve(result)
            })
        })
    }

    static async createdondat(o_u_id, o_c_id , o_t_id, o_number, o_status, o_post, o_tick, o_cost, o_time, s_id)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO orders (o_id, o_u_id , o_c_id , o_t_id , o_number, o_status, o_post, o_tick, o_cost, o_time, o_s_id) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [o_u_id, o_c_id , o_t_id, o_number, o_status, o_post, o_tick, o_cost, o_time, s_id], (error, result)=>{
                if(!error)
                    resolve(result)
            })    
        })
    }

    static async selectdd_id(b_id, num)
    {
        return new Promise(resolve =>{
            db.query("Select MAX(o_id ) max_o_id from orders"
            + " where o_t_id  = ?"
            + " and o_number = ?"
            + " order by o_id desc"
            , [b_id, num], (error, result)=>{
                if(!error)
                    resolve(result)
            })    
        })
    }

    static async createchitietdondat(ctdd_madd, ctdd_masp, ctdd_soluong, ctdd_giatien)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO order_detail (od_id, od_o_id, od_pro_id , od_quantity, od_price) VALUES (NULL, ?, ?, ?, ?);", [ctdd_madd, ctdd_masp, ctdd_soluong, ctdd_giatien], (error, result)=>{
                if(!error)
                    resolve(result)
            })    
        })
    }

    static async setStatusDonDat(t_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE tables SET t_empty = 0"
            + " WHERE t_id = ?", [t_id], (error, result)=>{
                if(!error)  resolve(true)
            })
        })
    }

    static async set_StatusOrder(o_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE orders SET o_status = 1"
            + " WHERE o_id = ?", [o_id], (error, result)=>{
                if(!error)  resolve(true)
            })
        })
    }

    setPriceOrderDetail

    static async setPriceOrderDetail(o_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE order_detail SET od_price = ?"
            + " WHERE od_o_id = ?", [o_id], (error, result)=>{
                if(!error)  resolve(true)
            })
        })
    }

    static async setCost(o_cost, o_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE orders SET o_cost = ?"
            + " WHERE o_id = ?", [o_cost, o_id], (error, result)=>{
                if(!error) resolve(true)
            })
        })
    }

    static async Set_o_post(o_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE orders SET o_post = 1"
            + " WHERE o_id = ?", [o_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetDonDatByS_ID(s_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM orders"
            + " WHERE o_s_id = ?", [s_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
}

module.exports = DonDatModel