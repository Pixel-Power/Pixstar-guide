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
        pixStar: '',
        image: ''
    });

    const [calendarModal, setCalendarModal] = useState(false);

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(
        () => {
            setRestaurant(getResDetail(code));
            console.log(restaurant);
            const latitude = restaurant.latitude;
            // const latitude = 37.520715;
            const longitude = restaurant.longitude;
            // const longitude = 127.021599;
            const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
            const options = {
                center : new kakao.maps.LatLng(latitude, longitude),  // 지도의 중심좌표.
                level : 3                                               
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

    return (

        <>
            <div>
                <div className={styles.resImages}>
                    <img className={styles.resImage} src="/images/restaurant-detail/img1.jpg"></img>
                    <img className={styles.resImage} src="/images/restaurant-detail/img2.jpg"></img>
                    <img className={styles.resImage} src="/images/restaurant-detail/img3.jpg"></img>
                </div>
                <div className={styles.resInfoBox}>
                    <div>
                        <img className={styles.pixStar} src="/images/restaurant-detail/pixstar.png"></img>
                        <h2>{restaurant.name}</h2>
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
                            <img className={styles.iconSize} src="/images/restaurant-detail/bulleted-list.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>카테고리&nbsp;&nbsp;&nbsp;</p>
                            <p>{restaurant.category}</p>
                        </div>
                    </div>
                    <div>
                        <h3>예약하기</h3>
                        <div className={styles.resInfoTextBox}>
                            <h4 className={styles.reservationDateTimeText}>예약 일시</h4>
                            <CalendarModal/>
                        </div>
                    </div>
                    <div>
                        <h3>매장위치</h3>
                        <div className={styles.map}>
                            <div id="map" style={{width: '100%', height: '100%'}}>실제지도</div>
                        </div>
                    </div>
                    <div>
                        <h3>픽스타 추천 레스토랑</h3>
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