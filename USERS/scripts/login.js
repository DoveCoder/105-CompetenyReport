function login() {
    console.log("Login...");
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let flag = false;
    let userlist = readUsers();  // this fuction is under storeManager

    for(var i = 0; i < userlist.length; i++) {
        let user = userlist[i];
        if (user.email === email && user.password === password) 
        {
            flag = true;
            window.location="users.html";
        }
        if (!flag) {
            console.log("invalid credentials");
            $("#alertError").removeClass("hide");
            setTimeout(function() {
                $("#alertError").addClass("hide");
            }, 3000);
        }
    }
}

function init() {
    console.log("Login");
    $("#btnLogin").click(login);
}
window.onload = init;