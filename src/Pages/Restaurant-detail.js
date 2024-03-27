import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResDetail } from "../apis/RestaurantAPI";
import styles from "./Restaurant-detail.module.css";
import CalendarModal from "../components/CalendarModal";

const { kakao } =  window;

function RestaurantDetail(){

    // const {code} = useParams();
    const code = 1;
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: '',
        longitude: 0,
        latitude: 0,
        phone: '',
        category: '',
        price: '',
        time: '',
        pixstar: '',
        description: '',
        img: ''
    });

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(
        () => {
            setRestaurant(getResDetail(code));
            console.log(restaurant);
            const latitude = restaurant.latitude;
            const longitude = restaurant.longitude;
            const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
            const options = {
                center : new kakao.maps.LatLng(latitude, longitude),  // 지도의 중심좌표.
                level : 2                                               
            };
            const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
            setKakaoMap(map);
            const markerPosition = new kakao.maps.LatLng(latitude, longitude);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true
            });
            marker.setMap(map);
            const iwContent = `<div style="padding:5px;"><p>${restaurant.name}</p><br><p>${restaurant.address}</p></div>`;
            const iwRemoveable = true;
            const iwPosition = new kakao.maps.LatLng(latitude, longitude);
            const infowindow = new kakao.maps.InfoWindow({
                // position : iwPosition,
                // content : iwContent
                content : iwContent,
                removable : iwRemoveable
            });
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            } );
        },
        []
    )

    const onClickPanTo = () => {
        // 이동할 위도 경도 위치를 생성
        const moveLatLng = new kakao.maps.LatLng(restaurant.latitude, restaurant.longitude);
        // 지도 중심을 부드럽게 이동시킴
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
        kakaoMap.panTo(moveLatLng);
    };

    return (

        <>
            <div>
                <div className={styles.resImages}>
                    <img className={styles.resImage} src="/images/food/salad/salad (4).jpg"></img>
                    <img className={styles.resImage} src={restaurant.img}></img>
                    <img className={styles.resImage} src="/images/food/pasta/pasta (5).jpg"></img>
                </div>
                <div className={styles.resInfoBox}>
                    <div>
                        <img className={styles.pixStar} src={restaurant.pixstar}></img>
                        <div className={styles.nameCategoryBox}>
                            <h1>{restaurant.name}</h1>
                            <h3 className={styles.category}>#{restaurant.category}</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/location-pin.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>{restaurant.address}</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/phone.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>전화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>{restaurant.phone}</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/clock.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>영업시간&nbsp;&nbsp;</p>
                            <p>{restaurant.time}</p>
                        </div>
                    </div>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/won.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>가격대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>{restaurant.price}</p>
                        </div>
                        <div className={styles.resInfo}>
                            {/* <img className={styles.iconSize} src="/images/restaurant-detail/bulleted-list.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p> */}
                            {/* <p>설명&nbsp;&nbsp;&nbsp;</p> */}
                            <p>{restaurant.description}</p>
                        </div>
                    </div>
                    <div>
                        <h2>예약하기</h2>
                        <div className={styles.resInfoTextBox}>
                            <h4 className={styles.reservationDateTimeText}>예약 일시</h4>
                            <CalendarModal/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>매장위치</h2>
                            <button className={styles.mapButton} onClick={onClickPanTo}>매장 위치로 돌아가기</button>
                        </div>
                        <div className={styles.map}>
                            <div id="map" style={{width: '100%', height: '100%'}}>실제지도</div>
                        </div>
                    </div>
                    <div>
                        <h2>픽스타 추천 레스토랑</h2>
                        <div className={styles.preferResBox}>
                            <div className={styles.preferRes}>
                                <img src="/images/restaurant-detail/prefer1.png"></img>
                                <p>육덕등심</p>
                                <p>소고기구이 · 서울시 강남구</p>
                            </div>
                            <div className={styles.preferRes}>
                                <img src="/images/restaurant-detail/prefer2.png"></img>
                                <p>FIVE GUYS</p>
                                <p>햄버거 · 서울시 강남구</p>
                            </div>
                            <div className={styles.preferRes}>
                                <img src="/images/restaurant-detail/prefer3.png"></img>
                                <p>La brick</p>
                                <p>양식 · 서울시 강남구</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default RestaurantDetail;