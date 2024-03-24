import { useEffect, useState } from "react";

const { kakao } = window;

function Map() {

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
            position: markerPosition
        });
        marker.setMap(map);
        const iwContent = '<div style="padding:5px;"><p>류니끄</p><br><p>서울특별시 강남구 강남대로 162길 40</p></div>';
        const iwPosition = new kakao.maps.LatLng(latitude, longitude);
        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition,
            content : iwContent
        });
        infowindow.open(map, marker);
    },
    []
    )

    return (
        <>
            <h1>Kakao Map 마커 생성하기</h1>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
        </>
    );
}

export default Map;