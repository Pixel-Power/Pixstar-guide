import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResDetail } from "../apis/RestaurantAPI";
import styles from "./Restaurant-detail.module.css";
import Map from "../components/Map";

const { kakao } =  window;

function RestaurantDetail(){


    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const latitude = 37.520715;
        const longitude = 127.021599;
        const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center : new kakao.maps.LatLng(latitude, longitude ),  // 지도의 중심좌표.
            level : 3                                               
        };
        const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
        setKakaoMap(map);
        const markerPosition = new kakao.maps.LatLng(latitude, longitude );
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            clickable: true
        });
        marker.setMap(map);
        const iwContent = '<div style="padding:5px;"><p>류니끄</p><br><p>서울특별시 강남구 강남대로 162길 40</p></div>';
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

    return(

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
                        <h3>식당이름</h3>
                    </div>
                    <hr/>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/location-pin.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>주소내용</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/phone.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>전화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>전화번호내용</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/clock.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>영업시간&nbsp;&nbsp;</p>
                            <p>영업시간내용</p>
                        </div>
                    </div>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/won.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>가격대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p>가격대내용</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/bulleted-list.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p>카테고리&nbsp;&nbsp;&nbsp;</p>
                            <p>카테고리내용</p>
                        </div>
                    </div>
                    <div>
                        <h4>예약하기</h4>
                        <div className={styles.resInfoTextBox}>
                            <h5>예약 일시</h5>
                            <div>예약기능구현(+달력)</div>
                            <div>
                                <button>오후 1:00</button>
                                <button>오후 6:00</button>
                                <button>오후 7:00</button>
                                <button>오후 8:00</button>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </div>
                    <div>
                        <h4>매장위치</h4>
                        <div className={styles.map}>
                            <div id="map" style={{width: '100%', height: '100%'}}>실제지도</div>
                            {/* <Map/> */}
                        </div>
                    </div>
                    <div>
                        <h4>픽스타 추천 레스토랑</h4>
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