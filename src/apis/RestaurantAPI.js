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


// export function searchRestaurants(category,address){
//     if(category) {
//         return category ? resDetail.filter(restaurant => restaurant.category === category) : resDetail;
//     } else {
//         return address ? resDetail.filter(restaurant => restaurant.address === address) : resDetail;
//     }
    
   
// } 

export function searchRestaurants(category,address) {
    if (category) {
        return resDetail.filter(restaurant => restaurant.category.match(category));
    } else {
        return resDetail.filter(restaurant => restaurant.address.match(address));
    } 
}






