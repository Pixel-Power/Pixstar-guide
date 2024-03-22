import users from '../data/memDetail.json';
export function getUserDetail(userCode) {
    return users.filter(user=>user.userCode===parseInt(userCode))[0];
    
}