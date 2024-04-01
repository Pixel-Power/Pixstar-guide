import { useNavigate, useParams } from 'react-router-dom';
import mainPageStyles from './Main.module.css';
import React, { useState, useEffect } from 'react';
import { getResDetail } from '../apis/RestaurantAPI';

function Main() {
    const navigate = useNavigate();

    const {userCode} = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurant, setRestaurant] = useState({});
    const realUserCode = (userCode !== 'undefined')? userCode: 0;
    
    const onClickHandler = () => { 
        
         if (userCode != null) {
            navigate(`/restaurantsearchresult/${userCode}`, { state: { searchTerm } }); 
        }
        else{
            navigate(`/restaurantsearchresult`, {state: {searchTerm}});
            }
        }
    
    
    const onClickHandler2 = (code) => {
        return () => {
            if (userCode != null) {
                navigate(`/restaurantdetail/${userCode}`, {state: {code}});
            }
            else {
            navigate(`/restaurantdetail`, {state: {code}});
            }
        }
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClickHandler();
        }
    };
    
    useEffect(() => {
        window.open('/popup', '/popup', option);
    }, []);

    useEffect(() => {
            const fetchRestaurantDetail = async () => {
                try {
                    const resDetail = await getResDetail(userCode);
                    setRestaurant(resDetail);
                } catch (error) {
                    console.error("Error fetching restaurant detail:", error);
                }
            };
            fetchRestaurantDetail();
        }, [userCode]);

    var option = "width = 500, height = 505, top = 100, left = 200, location=no, toolbar= no, status=no, scrollbars=no, resizable=no"


    return (
        <>

            <div className={mainPageStyles.allmainPageBody}>

                <div className={mainPageStyles.searchbox}>
                    <img className={mainPageStyles.searchBg}  src="/images/mainPage-images/배경8.png" alt="검색창 배경" />
                    <div className={mainPageStyles.searchinputbox}>
                        <input className={mainPageStyles.searchInput} type="search" placeholder="검색어를 입력하세요" onChange={e => setSearchTerm(e.target.value)} onKeyDown={handleOnKeyPress}></input>
                        <img className={mainPageStyles.searchButton}  type="button" onClick={onClickHandler} src="/images/mainPage-images/search-icon2.png" alt="검색"></img>
                    </div>
                </div>

                <div className={mainPageStyles.bodybox}>
                    <div className={mainPageStyles.row1}>

                        <div className={mainPageStyles.box1}>
                            <article className={mainPageStyles.imageContainer}>

                            <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler2(1)} src="/images/mainPage-images/이달의 식당5.png" alt="이달의 식당" />

                            {/* <div className={mainPageStyles.imageOverlay}>
                                <span className={mainPageStyles.monthRes} onClick={onClickHandler2(1)}>류니끄<br/>RYUNIQUE</span>
                                <p className={mainPageStyles.overlayText}>이달의 식당</p>
                            </div> */}

                            </article>
                        </div>

                        <div className={mainPageStyles.box2}>
                            <article className={mainPageStyles.imageContainer}>

                                <img className={mainPageStyles.menuImage} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/픽스타 매거진2.png" alt="픽스타 매거진" />
                                {/* <div className={mainPageStyles.imageOverlay}>
                                <span className={mainPageStyles.pixmagazine} onClick={onClickHandler}>2024년<br/>4월호</span>
                                <p className={mainPageStyles.overlayText}>픽스타 매거진</p>
                                </div> */}
                            </article>
                        </div>
                    </div>
                    <hr></hr>

                    <div className={mainPageStyles.row2}>
                        <div className={mainPageStyles.box3}>
                            <img className={mainPageStyles.menuImage2} src="/images/mainPage-images/체험단.png" />
                        </div>
                        <div className={mainPageStyles.box4}>
                            <div className={mainPageStyles.pixTitle}> PIX 체험단</div>
                            <hr></hr>
                            <div className={mainPageStyles.pixDetail}>
                                픽스타 체험단은<br/>
                                다양한 쩝쩝박사님들의<br/>
                                신뢰도 높은 리뷰를 전달해줍니다.<br/>

                                다양한 혜택과 함께 PIX 체험단을 경험해보세요.
                            </div>
                            <button className={mainPageStyles.pixbtn} type="button" onClick={() => alert("서비스 준비중 입니다.")}>신청하기</button>
                        </div>
                    </div>
                    <hr></hr>

                    <div className={mainPageStyles.row3}>
                        <div className={mainPageStyles.box5}>
                            <img className={mainPageStyles.menuImage3} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/커피의효능.png" alt="커피의 효능" />
                        </div>
                        <div className={mainPageStyles.box6}>
                            <img className={mainPageStyles.menuImage4} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/구글검색1위.png" alt="구글 검색 1위" />
                        </div>
                        <div className={mainPageStyles.box7}>
                            <img className={mainPageStyles.menuImage5} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/오늘의레시피.png" alt="오늘의 레시피" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Main;