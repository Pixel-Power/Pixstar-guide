import users from "../data/memDetail.json";

export function getUserDetail(userCode) {
    console.log(typeof userCode);
    return users.filter(user=> user.userCode===parseInt(userCode))[0];

}
