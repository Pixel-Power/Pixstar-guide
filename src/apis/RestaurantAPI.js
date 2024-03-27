import resDetail from '../data/resDetail.json';

// 식당 목록을 가져오는 함수
export function getResList(){
    return resDetail;
}

// 코드를 기반으로 특정 식당의 세부 정보를 가져오는 함수
export function getResDetail(code){
    // const restaurant = resDetail.find(restaurant => restaurant.code === code);
    // return resDetail ? restaurant : null;
    console.log(typeof code);
    return resDetail.filter(restaurant => restaurant.code === parseInt(code))[0];
}

// 카테고리를 기반으로 식당을 검색하는 함수
export function searchRestaurant(category){
    return category ? resDetail.filter(restaurant => restaurant.category === category) : resDetail;
}