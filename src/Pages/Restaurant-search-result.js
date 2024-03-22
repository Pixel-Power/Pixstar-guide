import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { searchRestaurant } from '../apis/RestaurantAPI';

function RestaurantSearchDetail(){

    const [restaurantList, setRestaurantList ] = useState([]);
    const [searchParams] = useSearchParams();

    const  category = searchParams.get('category');

    useEffect(
        () => {
            setRestaurantList(searchRestaurant(category));
        },
        [category]
    );

    return(
        <>
            <div>강남구 맛집 검색 결과</div>
            <div className='RestaurantBox'>
            
            </div>

        </>
    );
}

export default RestaurantSearchDetail;