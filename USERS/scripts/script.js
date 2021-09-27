// Create user object (constructor)
class User {
    constructor(email, pass, first, last, age, address, phone, payment, color) {
        this.email = email;
        this.password = pass;
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.address = address;
        this.phoneNumber = phone;
        this.payment = payment;
        this.color = color;
    }
}
// Create the register function
function registerUser() {
    let email = $("#txtEmail").val();
    let pass= $("#txtPassword").val();
    let first= $('#txtFirst').val();
    let last = $('#txtLast').val();
    let age = $('#txtAge').val();
    let address = $('#txtAddress').val();
    let phone = $('#txtPhone').val();
    let payment = $('#txtPayment').val();
    let color = $('#txtColor').val();

    let user = new User(email, pass, first, last, age, address, phone, payment, color);
    console.log(user);

    saveUser(user); // This function is on the storeManager
    clearUser();

}

function clearUser() {
    $('#txtEmail').val('');
    $('#txtPassword').val('');
    $('#txtFirst').val('');
    $('#txtLast').val('');
    $('#txtAge').val('');
    $('#txtAddress').val('');
    $('#txtPhone').val('');
    $('#txtPhone').val('');
    // color throws an error
}

function setNavInfo(){
    let list = readUsers();
    let count = list.length;

    $(".menu-info label").text(count + " users registered");
}

function init() {
    console.log("init function");
    $('#btn-save').click(registerUser);
    setNavInfo();

}
window.onload = init;

// Console log the user