function validate(){
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

function vld_chitietlich(){
    var ib = document.getElementById("ib");
    var lbl_cd_date = document.getElementById("lbl_cd_date");

    if(ib.value.trim() == ""){
        hours.style.border = "solid 3px red";
        lblhours.style.visibility = "visible";
        return false;
    }

    return true;
}