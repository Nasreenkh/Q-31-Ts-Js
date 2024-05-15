class User {
    constructor(public username: string) {}
}

const users: User[] = []; // Empty array to store users

// Function to print users
function printUsers(users: User[]) {
    if (users.length === 0) {
        console.log("We need to find some users!");
    } else {
        users.forEach(user => {
            console.log(user.username);
        });
    }
}

// Initial printing of users (empty array)
printUsers(users);

// Removing all usernames
users.splice(0, users.length);

// Printing users after removal
printUsers(users);