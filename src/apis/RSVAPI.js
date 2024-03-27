import reservations from '../data/reservation.json';

export function getRSVList(){
    return reservations;
}

export function getRSVDetail(restaurantCode) {
    return reservations.filter(reservation => reservation.restaurantCode === parseInt(restaurantCode))[0];
    
}