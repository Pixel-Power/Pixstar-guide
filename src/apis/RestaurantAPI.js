import resDetail from '../data/resDetail.json';


export function getResList(){
    return resDetail;
}


export function getResDetail(code){
    const restaurant = resDetail.find(restaurant => restaurant.code === code);
    return resDetail ? restaurant : null;
    console.log(typeof code);
    return resDetail.filter(restaurant => restaurant.code === parseInt(code))[0];
}


export function searchRestaurant(category){
    return category ? resDetail.filter(restaurant => restaurant.category === category) : resDetail;
}