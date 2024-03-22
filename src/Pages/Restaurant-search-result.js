import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { searchRestaurant } from '../apis/RestaurantAPI';
import ResDetailStyle from './Restaurant-search-result.module.css'

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
                <div className='ResTitle'>
                    <img src="/img/img16.jpg" alt="식당" className={ResDetailStyle.img16}></img>
                    <img src="/img/3star.png" alt="픽스타"></img>
                    <div className='ResName'>식당이름</div>
                    <span className='ResCategory'>#일식</span>
                </div>
                <div className='ResDetail'>
                    <img src="/img/location.png" alt='장소'></img>장소
                </div>
            </div>

        </>
    );
}

export default RestaurantSearchDetail;