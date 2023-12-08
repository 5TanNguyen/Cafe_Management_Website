function validate_chitietlich(){
    var db = document.getElementById("db").value;
    var lbl_cd_date = document.getElementById("lbl_cd_date");
    
    var hours = document.getElementById("hours");
    var lblhours = document.getElementById("lblhours");

    // if(db.getFullYear() == null)
    // {
    //     alert("Lỗi");
    // }

    // alert(db.value);

    if(hours.value.trim() == ""){
        hours.style.border = "solid 3px red";
        lblhours.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_nguyenlieu(){
    var ing_name = document.getElementById("ing_name");
    var lbl_ing_name = document.getElementById("lbl_ing_name");
    var lbl_validate = document.getElementById("lbl_validate");

    var ing_amount = document.getElementById("ing_amount");
    var lbl_ing_amount = document.getElementById("lbl_ing_amount");

    var ing_price = document.getElementById("ing_price");
    var lbl_ing_price = document.getElementById("lbl_ing_price");

    if(ing_name.value.trim() == ""){
        ing_name.style.border = "solid 3px red";
        lbl_ing_name.style.visibility = "visible";
        lbl_validate.style.visibility = "visible";
        
        if(ing_amount.value.trim() == ""){
            ing_amount.style.border = "solid 3px red";
            lbl_ing_amount.style.visibility = "visible";
            lbl_validate.style.visibility = "visible";

            if(ing_price.value.trim() == ""){
                ing_price.style.border = "solid 3px red";
                lbl_ing_price.style.visibility = "visible";
                lbl_validate.style.visibility = "visible";
            }
        }
        
        return false;
    }

    if(ing_amount.value.trim() == ""){
        ing_amount.style.border = "solid 3px red";
        lbl_ing_amount.style.visibility = "visible";
        lbl_validate.style.visibility = "visible";

        if(ing_price.value.trim() == ""){
            ing_price.style.border = "solid 3px red";
            lbl_ing_price.style.visibility = "visible";
            lbl_validate.style.visibility = "visible";
        }

        return false;
    }

    if(ing_price.value.trim() == ""){
        ing_price.style.border = "solid 3px red";
        lbl_ing_price.style.visibility = "visible";
        lbl_validate.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_ban(){
    var num = document.getElementById("num");
    var lblnum = document.getElementById("lblnum");

    if(num.value.trim() == "")
    {
        num.style.border = "solid 3px red";
        lblnum.style.visibility = "visible";
        return false;
    }
    else
    {
        return true;
    }
}

function validate_cchitietdondat(){
    var od_quantity = document.getElementById("od_quantity");
    var lblod_quantity = document.getElementById("lblod_quantity");

    var od_price = document.getElementById("od_price");
    var lblod_price = document.getElementById("lblod_price");

    if(od_quantity.value.trim() == "")
    {
        od_quantity.style.border = "solid 3px red";
        lblod_quantity.style.visibility = "visible";

        if(od_price.value.trim() == "")
        {
            od_price.style.border = "solid 3px red";
            lblod_price.style.visibility = "visible";
        }

        return false;
    }

    if(od_price.value.trim() == "")
        {
            od_price.style.border = "solid 3px red";
            lblod_price.style.visibility = "visibile";
            return false;
        }
    return true;
}

function validate_chitietdonnhap(){
    var ibd_amount = document.getElementById("ibd_amount");
    var lblibd_amount = document.getElementById("lblibd_amount");

    if(ibd_amount.value.trim() == "")
    {
        ibd_amount.style.border = "solid 3px red";
        lblibd_amount.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_ds_donnhap(){
    var ib_name = document.getElementById("ib_name");
    var lblib_name = document.getElementById("lblib_name");

    if(ib_name.value.trim() == "")
    {
        ib_name.style.border = "solid 3px red";
        lblib_name.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_sua_cachphache(){
    var bd_amount = document.getElementById("bd_amount");
    var lbl_bd_amount = document.getElementById("lbl_bd_amount");

    if(bd_amount.value.trim() == "")
    {
        bd_amount.style.border = "solid 3px red";
        lbl_bd_amount.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_ds_phiphatsinh(){
    var ci_name = document.getElementById("ci_name");
    var lbl_ci_name = document.getElementById("lbl_ci_name");

    var ci_cost = document.getElementById("ci_cost");
    var lbl_ci_cost = document.getElementById("lbl_ci_cost");

    if(ci_name.value.trim() == "")
    {
        ci_name.style.border = "solid 3px red";
        lbl_ci_name.style.visibility = "visible";

        if(ci_cost.value.trim() == "")
        {
            ci_cost.style.border = "solid 3px red";
            lbl_ci_cost.style.visibility = "visible";
        }

        return false;
    }

    if(ci_cost.value.trim() == "")
        {
            ci_cost.style.border = "solid 3px red";
            lbl_ci_cost.style.visibility = "visibile";
            return false;
        }
    return true; 
}
 
function validate_ds_sanpham(){
    var pro_name = document.getElementById("pro_name");
    var lbl_pro_name = document.getElementById("lbl_pro_name");

    if(pro_name.value.trim() == ""){
        pro_name.style.border = "solid 3px red";
        lbl_pro_name.style.visibility = "visible";
        
        return false;
    }

    return true; 
}

function validate_ds_thongke(){
    var s_name = document.getElementById("s_name");
    var lblsname = document.getElementById("lblsname");

    if(s_name.value.trim() == "")
    {
        //alert("Blank Statistical Name");
        s_name.style.border = "solid 3px red";
        lblsname.style.visibility="visible";
        return false;
    }
    else 
    {
        return true;
    }
}

function validate_vi(){
    var tran_money = document.getElementById("tran_money");
    var lbltran_money = document.getElementById("lbltran_money");

    if(tran_money.value.trim() == "")
    {
        tran_money.style.border = "solid 3px red";
        lbltran_money.style.visibility = "visible";
        return false;
    }

    return true;
}

function validate_themgiaSP(){
    var pp_pro_name = document.getElementById("pp_pro_name");
    var lbl_pp_pro_name = document.getElementById("lbl_pp_pro_name");

    var pp_price = document.getElementById("pp_price");
    var lbl_pp_price = document.getElementById("lbl_pp_price");

    if(pp_pro_name.value.trim() == "")
    {
        pp_pro_name.style.border = "solid 3px red";
        lbl_pp_pro_name.style.visibility = "visible";

        if(pp_price.value.trim() == "")
        {
            pp_price.style.border = "solid 3px red";
            lbl_pp_price.style.visibility = "visible";
        }

        return false; 
    }

    return true;
}

function validate_suagiaSP(){
    var pp_price = document.getElementById("ud_pp_price");
    var lbl_pp_price = document.getElementById("lbl_ud_pp_price");

    if(pp_price.value.trim() == "")
    {
        pp_price.style.border = "solid 3px red";
        lbl_pp_price.style.visibility = "visible";
        return false; 
    }

    return true;
}

function validate_themgiaNL(){
    var ip_ing_name = document.getElementById("ip_ing_name");
    var lbl_ip_ing_name = document.getElementById("lbl_ip_ing_name");

    var ip_price = document.getElementById("ip_price");
    var lbl_ip_price = document.getElementById("lbl_ip_price");

    if(ip_ing_name.value.trim() == "")
    {
        ip_ing_name.style.border = "solid 3px red";
        lbl_ip_ing_name.style.visibility = "visible";

        if(ip_price.value.trim() == "")
        {
            ip_price.style.border = "solid 3px red";
            lbl_ip_price.style.visibility = "visible";
        }

        return false; 
    }

    return true;
}

function validate_qlphache(){
    var b_name = document.getElementById("b_name");
    var lbl_b_name = document.getElementById("lbl_b_name");

    var b_description = document.getElementById("b_description");
    var lbl_b_description = document.getElementById("lbl_b_description");

    if(b_name.value.trim() == "")
    {
        b_name.style.border = "solid 3px red";
        lbl_b_name.style.visibility = "visible";

        if(b_description.value.trim() == "")
        {
            b_description.style.border = "solid 3px red";
            lbl_b_description.style.visibility = "visible";
        }

        return false; 
    }

    return true;
}

function validate_ds_nhanvien(){
    var u_username = document.getElementById("u_username");
    var lbl_u_username = document.getElementById("lbl_u_username");

    var u_password = document.getElementById("u_password");
    var lbl_u_password = document.getElementById("lbl_u_password");

    var u_name = document.getElementById("u_name");
    var lbl_u_name = document.getElementById("lbl_u_name");

    var u_phone = document.getElementById("u_phone");
    var lbl_u_phone = document.getElementById("lbl_u_phone");

    if(u_name.value.trim() == ""){
        u_name.style.border = "solid 3px red";
        lbl_u_name.style.visibility = "visible";

        if(u_username.value.trim() == "")
        {
            u_username.style.border = "solid 3px red";
            lbl_u_username.style.visibility = "visible";

            if(u_password.value.trim() == "")
            {
                u_password.style.border = "solid 3px red";
                lbl_u_password.style.visibility = "visible";
                
                if(u_phone.value.trim() == "")
                {
                    u_phone.style.border = "solid 3px red";
                    lbl_u_phone.style.visibility = "visible";
                }
            }
        }
        
        return false;
    }

    return true;
}