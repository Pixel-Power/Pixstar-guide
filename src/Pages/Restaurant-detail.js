import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResDetail } from "../apis/RestaurantAPI";
import styles from "./Restaurant-detail.module.css";
import CalendarModal from "../components/CalendarModal";

const { kakao } =  window;

function RestaurantDetail(){

    const location = useLocation();
    // 식당 코드
    const code = location.state.code;
    // 사용자 코드
    const {userCode} = useParams();
    console.log(`파람스 불러오기 : ${userCode}`);
    console.log(`userCode 타입 : ${typeof userCode}`);
    const realUserCode = (userCode !== 'undefined')? userCode: 0;
    console.log(`사용자코드 불러오기 : ${realUserCode}`);


    // 식당 정보 관리
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
        img: '',
        img1: '',
        img2: ''
    });

    // 카카오지도 관리
    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(
        () => {
            setRestaurant(getResDetail(code));
            const latitude = restaurant.latitude;
            const longitude = restaurant.longitude;
            const container = document.getElementById('map');           // 지도를 담을 영역의 DOM 레퍼런스
            console.log(`container ${container}`);
            const options = {
                center : new kakao.maps.LatLng(latitude, longitude),  // 지도의 중심좌표.
                level : 2                                               
            };
            const map = new kakao.maps.Map(container, options);         // 지도 생성 및 객체 리턴
            console.log('지도 불러옴..');

            setKakaoMap(map);
            const markerPosition = new kakao.maps.LatLng(latitude, longitude);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true
            });
            marker.setMap(map);
            const iwContent = `<div style="padding:5px; width: 300px"><p>${restaurant.name}</p><br><p>${restaurant.address}</p></div>`;
            const iwRemoveable = true;
            const infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            } );
        },
        []
    );

    console.log(restaurant);

    const onClickPanTo = () => {
        // 이동할 위도 경도 위치를 생성
        const moveLatLng = new kakao.maps.LatLng(restaurant.latitude, restaurant.longitude);
        // 지도 중심을 부드럽게 이동시킴
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
        kakaoMap.panTo(moveLatLng);
    };

    return (

        <>
            <div className={styles.allContents}>
                <div className={styles.resImages}>
                    <img className={styles.resImage} src={restaurant.img1}></img>
                    <img className={styles.resImage} src={restaurant.img}></img>
                    <img className={styles.resImage} src={restaurant.img2}></img>
                </div>
                <div className={styles.resInfoBox}>
                    <div>
                    <div className={styles.pixboxdetail}>
                        <img className={styles.pixStar} src={restaurant.pixstar}></img>
                    </div>
                        <div className={styles.nameCategoryBox}>
                            <span className={styles.name}>{restaurant.name}</span><br/>
                            <span className={styles.category}># {restaurant.category}</span>
                            <span className={styles.numberReviewText}>{`1,201개 리뷰 >`}</span>
                        </div>
                        <div className={styles.bookmarkLikeBox}>
                            <img src="/images/restaurant-detail/bookmark.png"></img>
                            <img src="/images/restaurant-detail/like.png"></img>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/location-pin.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p className={styles.address}>주소</p>
                            <p>{restaurant.address}</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/phone.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p className={styles.phone}>전화</p>
                            <p>{restaurant.phone}</p>
                        </div>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/clock.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p className={styles.time}>영업시간</p>
                            <p>{restaurant.time}</p>
                        </div>
                    </div>
                    <div className={styles.resInfoTextBox}>
                        <div className={styles.resInfo}>
                            <img className={styles.iconSize} src="/images/restaurant-detail/won.png"></img>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <p className={styles.price}>가격대</p>
                            <p>{restaurant.price}</p>
                        </div>
                        <div className={styles.resDetailDe}>
                            <span className={styles.resdeTitle}>안내</span>
                            <span className={styles.resdeSide}>{restaurant.description}</span>
                        </div>
                    </div>
                    <div>
                        <h2>예약하기</h2>
                        <div className={styles.resInfoTextBox}>
                            <h4 className={styles.reservationDateTimeText}>예약 일시</h4>
                            <CalendarModal code={code} userCode={realUserCode}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.photoReviewBox}>
                            <h2>사진 / 리뷰</h2>
                            <p className={styles.allReviewText}>{`전체보기 >`}</p>
                        </div>
                        <div className={styles.resReviewBox}>
                            <div className={styles.resReviewImages}>
                                <img className={styles.reviewImage} src="/images/restaurant-detail/review1.jpg"></img>
                                <img className={styles.reviewImage} src="/images/restaurant-detail/review2.jpg"></img>
                                <img className={styles.reviewImage} src="/images/restaurant-detail/review3.jpg"></img>
                                <img className={styles.reviewImage} src="/images/restaurant-detail/review4.jpg"></img>
                                <img className={styles.reviewImage} src="/images/restaurant-detail/review5.jpg"></img>
                            </div>
                            <div className={styles.reviewInfo}>
                                <img className={styles.iconSize} src="/images/restaurant-detail/review.png"></img>
                                <p className={styles.review}>리뷰</p>
                                <div>
                                    <p className={styles.reviewContent}>정말 오랜만에 훌륭한 코스요리를 먹었습니다. 파인다이닝이 많아지면서 비슷비슷한 구성에 코스를 많이 접해서 
                                        상상되는 맛이나 느낌이 있는데 창의적인 요리와 맛에 감탄했습니다. 재료부터 요리방식과 담고자 하는 메시지까지 
                                        이렇게 공을 들이는 곳이 있을까라는 생각이 들 정도로 감탄하면서 식사를 했네요. 재료들을 정성스럽게 조리하여 
                                        오리마다 향과 맛이 다채로우면서 조화롭고 여운이 느껴집니다. 저도 요리 만드는걸 좋아하지만 진정한 장인의 길로 
                                        만들어진 요리란 이런걸까하는 마음이 드네요. 파인다이닝을 많이 다녀본 분들이라혐 류니끄의 코스요리 가격도 결코 
                                        비싸지 않다고 느낄겁니다. 여자친구도 너무 기억에 남는다고 하구요. 식사를 하고 드라이브 가는데 속도 편한하고 
                                        포만감도 지속되는 느낌을 잊지 못할것 같습니다.</p>
                                </div>
                            </div>
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
                                <p style={{fontWeight: 'bolder', fontSize: '23px'}}>육덕등심</p>
                                <p>소고기구이 · 서울시 강남구</p>
                            </div>
                            <div className={styles.preferRes}>
                                <img src="/images/restaurant-detail/prefer2.png"></img>
                                <p style={{fontWeight: 'bolder', fontSize: '23px'}}>FIVE GUYS</p>
                                <p>햄버거 · 서울시 강남구</p>
                            </div>
                            <div className={styles.preferRes}>
                                <img src="/images/restaurant-detail/prefer3.png"></img>
                                <p style={{fontWeight: 'bolder', fontSize: '23px'}}>La brick</p>
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