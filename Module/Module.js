const URL = 'https://jsonplaceholder.typicode.com';
const usersURL = URL + '/users';
let users = [];
const getUsers = async () => {
    const getUsersRequest = await fetch(usersURL)
    const data = await getUsersRequest.json()
    users = data
    // getUsersRequest
    //     .then((res) => {
    //             res.json()
    //                 .then((parsedRes) => {
    //                         console.log(parsedRes)
    //                     })
    //         })
}
const userListElem = document.getElementById('user-list')
const start = async () => {
    await getUsers();
    showUsers(users);
    addNewUserButtonHandler();

    // const element = document.getElementById('test-id');
    // const spanElements = document.getElementsByClassName('text');
    // console.log(element)
    // console.log(spanElements)

}
function getNumber() {
    let number = 0;

    return () => {
        return ++number
    }
}

const newFunction = getNumber();
let newNumber = newFunction();
console.log(newNumber);
newNumber = newFunction();
console.log(newNumber);
start();

