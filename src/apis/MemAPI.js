import users from "../data/memDetail.json";

export function usersData(userCode) {
    console.log(typeof userCode);
    return users.filter(user=> user.userCode===parseInt(userCode))[0];

}
