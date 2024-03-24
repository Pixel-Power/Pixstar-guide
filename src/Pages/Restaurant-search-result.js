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
            <div className={ResDetailStyle.flexcontainer}>
            <div className={ResDetailStyle.ResTitleName}>강남구 맛집 검색 결과</div>
                <div className={ResDetailStyle.flexItem}>
                    <div className={ResDetailStyle.RestaurantBox1}>
                        <div className={ResDetailStyle.ResTitle}>
                            <img src="/img/img16.jpg" alt="식당" className={ResDetailStyle.img16}></img><br/>
                            <img src="/img/3star.png" alt="픽스타"></img>
                            <div className={ResDetailStyle.ResName}>식당이름</div>
                            <span className={ResDetailStyle.ResCategory}>#일식</span>
                        </div>
                        <div className='ResDetail'>
                            <img src="/img/location.png" alt='장소'></img>장소<br/>
                            <img src="/img/phone.png" alt='전화'></img>0507-1234-5678
                            <div className='description'>재료의 선도가 좋기로 유명한, 서울에서 손꼽히는 일식집 중 하나다.<br/>
                                            담백하고 정갈한 90여 가지의 정통 관서 지방의 요리를 선보인다.</div>
                        </div>
                    </div>
                    <div className={ResDetailStyle.RestaurantBox2}>
                        <div className={ResDetailStyle.ResTitle}>
                            <img src="/img/img16.jpg" alt="식당" className={ResDetailStyle.img16}></img><br/>
                            <img src="/img/3star.png" alt="픽스타"></img>
                            <div className={ResDetailStyle.ResName}>식당이름</div>
                            <span className={ResDetailStyle.ResCategory}>#일식</span>
                        </div>
                        <div className='ResDetail'>
                            <img src="/img/location.png" alt='장소'></img>장소<br/>
                            <img src="/img/phone.png" alt='전화'></img>0507-1234-5678
                            <div className='description'>재료의 선도가 좋기로 유명한, 서울에서 손꼽히는 일식집 중 하나다.<br/>
                                            담백하고 정갈한 90여 가지의 정통 관서 지방의 요리를 선보인다.</div>
                        </div>
                    </div>
                    <div className={ResDetailStyle.RestaurantBox3}>
                        <div className={ResDetailStyle.ResTitle}>
                            <img src="/img/img16.jpg" alt="식당" className={ResDetailStyle.img16}></img><br/>
                            <img src="/img/3star.png" alt="픽스타"></img>
                            <div className={ResDetailStyle.ResName}>식당이름</div>
                            <span className={ResDetailStyle.ResCategory}>#일식</span>
                        </div>
                        <div className='ResDetail'>
                            <img src="/img/location.png" alt='장소'></img>장소<br/>
                            <img src="/img/phone.png" alt='전화'></img>0507-1234-5678
                            <div className='description'>재료의 선도가 좋기로 유명한, 서울에서 손꼽히는 일식집 중 하나다.<br/>
                                            담백하고 정갈한 90여 가지의 정통 관서 지방의 요리를 선보인다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestaurantSearchDetail;