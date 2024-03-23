import resDetail from '../data/resDetail.json';

export function getResList(){
    return resDetail;
}

export function getResDetail(code){
    console.log(typeof code);
    return resDetail.filter(restaurant => restaurant.code === parseInt(code))[0];
}

export function searchRestaurant(category){
    return resDetail.fill();
}