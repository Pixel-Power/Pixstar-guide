import resDetail from '../data/resDetail.json';


export function getResList(){
    return resDetail;
}


export function getResDetail(code){
    // const restaurant = resDetail.find(restaurant => restaurant.code === code);
    // return resDetail ? restaurant : null;
    console.log(typeof code);
    return resDetail.filter(restaurant => restaurant.code === parseInt(code))[0];
}


export function searchRestaurant(category){
    return category ? resDetail.filter(restaurant => restaurant.category === category) : resDetail;
}

// export function searchRestaurants(category, address) {
//     if (category) {
//          return resDetail.filter(restaurant => restaurant.category === category);
//      } else  {
//          return resDetail.filter(restaurant => restaurant.address === address);
//      } 
//  }


// export async function searchRestaurants(category, address) {
//         if (category && address) {
//             // 카테고리와 주소가 모두 주어진 경우
//             return resDetail.filter(restaurant => restaurant.category === category && restaurant.address.includes(address));
//         } else if (category) {
//             // 카테고리만 주어진 경우
//             return resDetail.filter(restaurant => restaurant.category === category);
//         } else if (address) {
//             // 주소만 주어진 경우
//             return resDetail.filter(restaurant => restaurant.address.includes(address));
//         } else {
//             // 카테고리와 주소가 모두 주어지지 않은 경우
//             return [];
//         }
// }

// export async function searchRestaurants(category, address) {
//     const filteredRestaurants = resDetail.filter(restaurant => {
//         const restaurantAddress = restaurant.address.toLowerCase(); // 주소를 소문자로 변환
//         if (category && address) {
//             // 카테고리와 주소가 모두 주어진 경우
//             return restaurant.category === category && restaurantAddress.includes(address.toLowerCase());
//         } else if (category) {
//             // 카테고리만 주어진 경우
//             return restaurant.category === category;
//         } else if (address) {
//             // 주소만 주어진 경우
//             return restaurantAddress.includes(address.toLowerCase()) || restaurantAddress.includes('강남');
//         } else {
//             // 카테고리와 주소가 모두 주어지지 않은 경우
//             return false;
//         }
//     });

//     return filteredRestaurants;
// }
