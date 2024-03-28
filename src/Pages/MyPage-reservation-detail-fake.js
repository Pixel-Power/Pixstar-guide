import styles from "./MyPage-reservation-detail.module.css";
import { useEffect, useState } from "react";
import { getResDetail } from "../apis/RestaurantAPI";
import { useParams } from "react-router-dom";

const { kakao } = window;

function ReservationDetailFake() {


    const code = 1;
    const [restaurant, setRestaurant] = useState({
        code: 0,
        name: '',
        address: '',
        longitude: 0,
        latitude: 0,
        phone: '',
        description: ''
    });

    const [kakaoMap, setKakaoMap] = useState(null);
    
    useEffect(
        () => {
            setRestaurant(getResDetail(code));
            console.log(restaurant);
            const latitude = restaurant.latitude;
            const longitude = restaurant.longitude;
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            setKakaoMap(map);
            const markerPosition = new kakao.maps.LatLng(latitude, longitude);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true
            });
            marker.setMap(map);
            const iwContent = '<div style="padding:5px;"><p>양귀족 양꼬치 양갈비</p><br><p>서울특별시 강남구 역삼동 815-5, 1층</p></div>';
            const iwRemoveable = true;
            const iwPosition = new kakao.maps.LatLng(latitude, longitude);
            const infowindow = new kakao.maps.InfoWindow({
                // position : iwPosition,
                // content : iwContent
                content: iwContent,
                removable: iwRemoveable
            });
            kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        },
        []
    );
    
    return (
        <div>
            <h2 className={styles.RestaurantName}>{restaurant.name}</h2>
            <div className={styles.Box}>
                <h3 className={styles.BoxList}>예약내용</h3>
                <div className={styles.ListInfoBox}>
                    <div className={styles.ListName}>
                        <p>일정</p>
                        <p>인원</p>
                        <p>안내사항</p>
                    </div>
                    <div className={styles.ListInfo}>
                        <p>2024.04.01 6:30</p>
                        <p>3명</p>
                        <p>예약 시간보다 5분 일찍 오시기 바랍니다.</p>
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <h3 className={styles.BoxList}>식당정보</h3>
                <div className={styles.ListInfoBox}>
                    <div className={styles.ListName}>
                        <p>주소</p>
                        <p>연락처</p>
                        <p></p>
                    </div>
                    <div className={styles.ListInfo}>
                        <p>서울특별시 강남구 강남대로 162길 40</p>
                        <p>02-567-1234</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <h3 className={styles.BoxList}>예약자 정보</h3>
                <div className={styles.ListInfoBox}>
                    <div className={styles.ListName}>
                        <p>예약자</p>
                        <p>연락처</p>
                        <p>이메일</p>
                    </div>
                    <div className={styles.ListInfo}>
                        <p>송강</p>
                        <p>010-1234-5678</p>
                        <p>songriver1@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr className={styles.Hr} />
            <div className={styles.map}>
                <div id="map" style={{ width: '80%', height: '500px' }}>실제지도</div>
            </div>
        </div>

    );
}

export default ReservationDetailFake;