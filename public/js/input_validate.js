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