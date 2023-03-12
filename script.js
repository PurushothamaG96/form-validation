const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password")
const btn = document.getElementById("btn")
const err = document.getElementsByClassName("err")

window.onload = () => {
    name.focus()
}
name.addEventListener("blur", () => {
    if (name.value == "") {
        err[0].innerHTML = "Fields must be filled and its name"
        email.disabled = true;
        password.disabled = true;
        confirm_password.disabled = true;
        btn.disabled = true;
    }
    else {
        err[0].innerHTML = ""
        email.disabled = false;
        password.disabled = false;
        confirm_password.disabled = false;
    }
})
email.addEventListener("blur", () => {
    if (email.value == "") {
        err[1].innerHTML = "Fields must be filled and its email"
        password.disabled = true;
        confirm_password.disabled = true;

    }
    else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        err[1].innerHTML = ""
        password.disabled = false;
        confirm_password.disabled = false;
        }
        else{
            err[1].innerHTML = "email must fild must be includes @gmail.com|.com"
            password.disabled = true;
            confirm_password.disabled = true;
        }
    }
})
password.addEventListener("blur", () => {
    if (password.value == "") {
        err[2].innerHTML = "Fields must be filled and its password"
        confirm_password.disabled = true;

    }
    else {
        
            err[2].innerHTML = ""
            confirm_password.disabled = false;
            btn.disabled = true
        
       

    }
})
confirm_password.addEventListener("blur", () => {
    if (confirm_password.value == "") {
        err[3].innerHTML = "Fields must be filled and must be matches with password"
    }
    else {
        if (password.value !== confirm_password.value) {
            err[3].innerHTML = "Password and Confirm Passwords are not matched"

        }
        else {
            err[3].innerHTML = ""
            btn.disabled = false;
        }


    }
})
btn.addEventListener("click", () => {
    if (name.value && email.value && password.value && confirm_password.value) {
        alert("Validated")
    }
    else {
        console.log("fields are empty")
    }
})
