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