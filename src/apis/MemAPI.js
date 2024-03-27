import users from "../data/memDetail.json";
import userId from "../data/memDetail.json";

export function getUserList() {
    return users;
}

export function getUserDetail(userCode) {
    const user = users.filter(user => user.userCode === parseInt(userCode))[0];
    return users? user : null;
    // console.log(typeof userCode);
    // return users.filter(user => user.userCode === parseInt(userCode))[0];
}
