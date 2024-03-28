import {NavLink, useNavigate, useSearchParams, useLocation, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { searchRestaurant } from '../apis/RestaurantAPI';
import ResDetailStyle from './Restaurant-search-result.module.css';
import { Link } from 'react-router-dom';


function RestaurantSearchDetail(){

    // const location = useLocation();
    // const userCode = 1;
    const {userCode} = useParams();
    console.log(`userCode : ${userCode}`);
    const [restaurantList, setRestaurantList ] = useState([]);
    const [searchParams] = useSearchParams();
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const  category = searchParams.get('category');

    const navigate = useNavigate();

    useEffect(
        () => {
            setRestaurantList(searchRestaurant(category));
        },[category]
    );

    const onClickHanlder = (code) => {
        navigate(`/restaurantdetail/${userCode}`, {state : {code}});
    }


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
                            currentItems.map((restaurant, code) => (
                        <div key={code} className={ResDetailStyle.RestaurantBox1} onClick={() => onClickHanlder(restaurant.code)}>
                            { restaurant && (
                                <div className={ResDetailStyle.ResTitle}>

                                    <div className={ResDetailStyle.pixpic}>
                                    <img src={restaurant.img} alt="식당" className={ResDetailStyle.imgRes}></img><br/>
                                    </div>

                                    <div className={ResDetailStyle.pixbox}>
                                    <img src={restaurant.pixstar} className={ResDetailStyle.pixstar} alt="픽스타"></img><br/>
                                    </div>
                                    <span className={ResDetailStyle.ResName}>{restaurant.name}</span>
                                    <span className={ResDetailStyle.ResCategory}>#{restaurant.category}</span>
                                </div>
                            )}
                            { restaurant && (
                                <div className={ResDetailStyle.ResDetail}>
                                    <img src="images/restaurant-detail/location-pin.png" alt='주소' className={ResDetailStyle.address}></img>{restaurant.address}<br/>
                                    <img src="images/restaurant-detail/phone.png" alt='전화' className={ResDetailStyle.phone}></img>{restaurant.phone}
                                    <div className={ResDetailStyle.description}>{restaurant.description}</div>
                                </div>
                            )}
                        </div>

                        ))
                        ) : (
                            <div className={ResDetailStyle.noResult}>맛집 검색 결과가없습니다.</div>
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