import {NavLink, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { searchRestaurant } from '../apis/RestaurantAPI';
import ResDetailStyle from './Restaurant-search-result.module.css';


function RestaurantSearchDetail(){
    const [restaurantList, setRestaurantList ] = useState([]);
    const [searchParams] = useSearchParams();
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const  category = searchParams.get('category');

    useEffect(
        () => {
            setRestaurantList(searchRestaurant(category));
        },[category]
    );

    const indexOfLastRestaurant = currentPage * itemsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - itemsPerPage;
    const currentItems = restaurantList.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <>
            <div className={ResDetailStyle.flexcontainer}>
            <div className={ResDetailStyle.ResTitleName}>{category} 맛집 검색 결과</div>
                <div className={ResDetailStyle.flexItem1}>
                    {currentItems.length > 0 ? (
                        currentItems.map((restaurant, index) => (
                    <div key={index} className={ResDetailStyle.RestaurantBox1}>
                        <div className={ResDetailStyle.ResTitle}>
                            <img src={restaurant.img} alt="식당" className={ResDetailStyle.imgRes}></img><br/>
                            <img src={restaurant.pixstar} className={ResDetailStyle.pixstar} alt="픽스타"></img><br/>
                            <span className={ResDetailStyle.ResName}>{restaurant.name}</span>
                            <span className={ResDetailStyle.ResCategory}>#{restaurant.category}</span>
                        </div>
                        <div className={ResDetailStyle.ResDetail}>
                            <img src="images/restaurant-detail/location-pin.png" alt='장소' className={ResDetailStyle.address}></img>{restaurant.address}<br/>
                            <img src="images/restaurant-detail/phone.png" alt='전화' className={ResDetailStyle.phone}></img>{restaurant.phone}
                            <div className={ResDetailStyle.description}>{restaurant.description}</div>
                        </div>
                    </div>

                    ))
                    ) : (
                        <div className={ResDetailStyle.noResult}> </div>
                    )}
                </div>


                </div>
                <div className={ResDetailStyle.paging}>
                <NavLink to='#' className={ResDetailStyle.select1} onClick={() => paginate(currentPage - 1)}>&lt;</NavLink>
                {restaurantList.length > 0 &&
                    Array.from({ length: Math.ceil(restaurantList.length / itemsPerPage) }, (_, index) => (
                        <NavLink key={index} to='#' className={index + 1 === currentPage ? ResDetailStyle.select2 : ResDetailStyle.select2} onClick={() => paginate(index + 1)}>{index + 1}</NavLink>
                    ))}
                <NavLink to='#' className={ResDetailStyle.select1} onClick={() => paginate(currentPage + 1)}>&gt;</NavLink>
            </div>
            
        </>
    );
}

export default RestaurantSearchDetail;