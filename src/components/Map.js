import { useEffect, useState } from "react";

const { kakao } = window;

function Map({ name, address, latitude, longitude }) {

    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        // const latitude = 37.520715;
        // const longitude = 127.021599;
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
        const iwContent = `<div style="padding:5px; width: 300px"><p>${name}</p><br><p>${address}</p></div>`;
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
            <div id="map" style={{
                width: '1000px',
                height: '500px'
            }}></div>
        </>
    );
}

export default Map;