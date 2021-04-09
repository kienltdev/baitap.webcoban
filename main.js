function validateFormComment() {
    // let isValid = true;

    // document.forms[form-comment];
    let nameUser = document.forms["form-comment"]["user-cmt"].value;
    let emailUser = document.forms["form-comment"]["user-email"].value;
    let contentUserEnter = document.forms["form-comment"]["content-submit"].value;
    
    if (nameUser = " ") {
        document.getElementById("user-cmt-err").innerHTML="Ten khong duoc de trong";
        return false;
    }

    if (emailUser = " ") {
        document.getElementById("user-email-err").innerHTML="*Email khong duoc de trong";
    }
    
    if (contentUserEnter = " ") {
        document.getElementById("content-submit-err").innerHTML="*Noi dung khong duoc de trong";
    }

    return false;
}