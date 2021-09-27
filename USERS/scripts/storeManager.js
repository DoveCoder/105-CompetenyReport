const KEY_USERS = "users"

function saveUser(user) {
    // Load the old data
    let data = readUsers();
    // Merge
    data.push(user);
    // Save user to localstorage
    let val = JSON.stringify(data);
    localStorage.setItem(KEY_USERS, val);
}

function readUsers() {
    let previousUsers = localStorage.getItem(KEY_USERS);
    
    if (!previousUsers) { // Not data?
        return []; // returning a empty array if no data is found
    } else {
        let list = JSON.parse(previousUsers); // parse the string back inti obj
        return list; // this is an object
    }
}

function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}