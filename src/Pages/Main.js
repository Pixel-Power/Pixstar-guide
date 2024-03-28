import { useNavigate } from 'react-router-dom';
import mainPageStyles from './Main.module.css';
import React, { useState } from 'react';

function Main() {

    const userCode = 1;

    const onClickHandler = () => { navigate(`/restaurantsearchresult/${userCode}`, { state: { searchTerm } }); }

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    var option = "width = 500, height = 500, top = 100, left = 200, location=no, toolbar= no, status=no, scrollbars=no, resizable=no"

    useEffect(() => {
        window.open('/popup', '/popup', option);
    }, []);

    return (
        <>

            <div className={mainPageStyles.allmainPageBody}>

                <div className={mainPageStyles.searchbox}>
                    <img className={mainPageStyles.searchBg}  src="/images/mainPage-images/검색창배경.png" alt="검색창 배경" />
                    <div className={mainPageStyles.searchinputbox}>
                        <img className={mainPageStyles.searchButton}  type="button" onClick={onClickHandler} src="/images/mainPage-images/search-icon.png" alt="검색"></img>
                        <input className={mainPageStyles.searchInput} type="search" placeholder="검색어를 입력하세요" onChange={e => setSearchTerm(e.target.value)}></input>
                    </div>
                </div>

                <div className={mainPageStyles.bodybox}>
                    <div className={mainPageStyles.row1}>

                        <div className={mainPageStyles.box1}>
                            <article className={mainPageStyles.imageContainer}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler} src="/images/mainPage-images/이달의 식당3.jpg" alt="이달의 식당" />
                            <div className={mainPageStyles.imageOverlay}>
                                <span className={mainPageStyles.monthRes}>류니끄</span>
                                <p className={mainPageStyles.overlayText}>이달의 식당</p>
                            </div>
                            </article>
                        </div>

                        <div className={mainPageStyles.box2}>
                            <article className={mainPageStyles.imageContainer}>

                                <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler} src="/images/mainPage-images/픽스타 매거진.jpeg" alt="픽스타 매거진" />
                                <div className={mainPageStyles.imageOverlay}>
                                <span className={mainPageStyles.pixmagazine}>2024 4월호</span>
                                <p className={mainPageStyles.overlayText}>픽스타 매거진</p>
                                </div>
                            </article>
                            </div>
                        </div>
                    <hr></hr>

                    <div className={mainPageStyles.row2}>
                        <div className={mainPageStyles.box3}>
                            <img className={mainPageStyles.menuImage2} src="/images/mainPage-images/체험단.png" />
                        </div>
                        <div className={mainPageStyles.box4}>
                            <p> pix 체험단</p>
                            <hr></hr>
                            <p>픽스타 체험단은<br/>
                                다양한 쩝쩝박사님들의<br/>
                                신뢰도 높은 리뷰를 전달해줍니다.

                                다양한 혜택과 함께 PIX 체험단을 경험해보세요</p>
                            <button type="button" onClick={() => alert("서비스 준비중 입니다.")}>신청하기</button>
                        </div>
                    </div>
                    <hr></hr>

                    <div className={mainPageStyles.row2}>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/커피의효능.png" alt="커피의 효능" />
                        </div>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/구글검색1위.png" alt="구글 검색 1위" />
                        </div>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={() => alert("서비스 준비중 입니다.")} src="/images/mainPage-images/오늘의레시피.png" alt="오늘의 레시피" />
                        </div>
                    </div>
        </>
    );
}

export default Main;