const res = require("express/lib/response")
const db=require("../config/db")

class SanPhamModel{
static async getsanphams()
{

    return new Promise(resolve =>{
        db.query("SELECT * FROM products",[],(error , result)=>{

            if(!error)
            resolve(result)
        })
    })
}

static async add_SanPham(sp_ten, sp_gia, sp_mota, pro_pt_id, pro_pp_id, pro_b_id)
{
    return new Promise(resolve =>{
        db.query( "INSERT INTO `products`(`pro_id`, `pro_name`, `pro_price`, `pro_description`, `pro_pt_id`, `pro_pp_id`, `pro_b_id`)"
                + " VALUES (NULL, ?, ?, ?, ?, ?, ?)", [sp_ten, sp_gia, sp_mota, pro_pt_id, pro_pp_id, pro_b_id], (error, result)=>
        {
            if(!error)
                resolve(true)
            else
            {
                console.log("error");
                resolve(false)
            }
                
        })
    })
}

static async delete_SanPhamForm(sp_id)
{
    return new Promise(resolve =>{
        db.query("SELECT * FROM products WHERE pro_id = ?",[sp_id],(error , result)=>{

            if(!error)
            resolve(result)
        })
    })
}

static async delete_SanPham(sp_id)
{
    return new Promise(resolve =>{
        db.query("Delete from products where pro_id = ?", [sp_id], (error, result)=>{
            if(error)
                resolve(false)
            else
                resolve(true)
        })
    })
}

static async edit_SanPhamForm(sp_id)
{
    return new Promise(resolve =>{
        db.query("SELECT * FROM products WHERE pro_id = ?", [sp_id], (error, result)=>{
            if(!error)
            resolve(result)
        })
    })
}


static async edit_SanPham(sp_id, new_sp_ten, new_sp_gia, new_sp_mota)
{
    return new Promise (resolve =>{
        db.query("Update products set pro_name = ?, pro_price = ?, pro_description = ? WHERE pro_id = ?",[new_sp_ten, new_sp_gia, new_sp_mota, sp_id], (error, result)=>{
            if(!error)
            resolve(true)  
        })

    })
}

static async getPrice(ctdd_masp)
{
    return new Promise(resolve =>{
        db.query("Select pro_price FROM products"
        + " WHERE pro_id = ?", [ctdd_masp], (error, result)=>{
            if(!error) 
                resolve(result)
            else
                res.send("Failed hụ hụ")
        })
    })
}

static async GetPro_Price()
{
    return new Promise(resolve =>{
        db.query("Select * FROM product_price"
        , [], (error, result)=>{
            if(!error) 
                resolve(result)
            else
                res.send("Failed hụ hụ")
        })
    })
}

static async GetPro_Type()
{
    return new Promise(resolve =>{
        db.query("Select * FROM product_type"
        , [], (error, result)=>{
            if(!error) 
                resolve(result)
            else
                res.send("Failed")
        })
    })
}

static async ChinhGiaSanPham(pp_id, pp_pro_name, pp_date, pp_price)
{
    return new Promise (resolve =>{
        db.query( "Update product_price"
                + " Set pp_pro_name = ?,"
                + " pp_price = ?,"
                + " pp_date = ?"
                + " WHERE pp_id = ?",[pp_pro_name, pp_price, pp_date, pp_id], (error, result)=>{
            if(!error)
            resolve(true)  
        })

    })
}

static async ThemGiaSanPham(pp_pro_name, pp_date, pp_price)
{
    return new Promise (resolve =>{
        db.query( "Insert Into product_price"
                + " VALUES(NULL, ?, ?, ?)",[pp_pro_name, pp_price, pp_date], (error, result)=>{
            if(!error)
            resolve(true)  
        })

    })
}

}

module.exports=SanPhamModel