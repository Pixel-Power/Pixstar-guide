import mainPageStyles from './Main.module.css';

function Main() {

    const onClickHandler = () => {
        alert("서비스 준비중 입니다.");
    }


    return (
        <>
            <div className={mainPageStyles.allmainPageBody}>
                <>
                    <div className={mainPageStyles.searchbox}>
                        <img id="searchBg" src="/images/mainPage-images/검색창배경.png" alt="검색창 배경" />
                        <input id="searchInput" type="text" placeholder="검색어를 입력하세요"></input>
                        <img id="searchButton" src="/images/mainPage-images/search-icon.png" alt="검색"></img>
                    </div>
                </>
                <>
                    <div className={mainPageStyles.bodybox}>
                        <div className={mainPageStyles.row}>
                            <div className={mainPageStyles.box1}>
                                <img className={mainPageStyles.menuImage} src="/images/mainPage-images/이달의 식당.jpg" alt="이달의 식당" />
                                <div className={mainPageStyles.imageOverlay}>
                                    <p className={mainPageStyles.overlayText}>이달의 식당</p>
                                </div>
                            </div>
                            <div className={mainPageStyles.box1}>
                                <img className={mainPageStyles.menuImage} src="/images/mainPage-images/이달의 식당.jpg" alt="픽스타 매거진" />
                                <div className={mainPageStyles.imageOverlay}>
                                    <p className={mainPageStyles.overlayText}>픽스타 매거진</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={mainPageStyles.row}>
                            <div className={mainPageStyles.box1}>
                                <img className={mainPageStyles.menuImage} src="/images/mainPage-images/체험단.png" />
                                <p> pix 체험단
                                </p>
                                <button type="button" onClick={onClickHandler}>신청하기</button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={mainPageStyles.row}>
                            <div className={mainPageStyles.box2}>
                                <img className={mainPageStyles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/커피의효능.png" alt="커피의 효능" />
                                <div className={mainPageStyles.imageOverlay} />
                            </div>
                            <div className={mainPageStyles.box2}>
                                <img className={mainPageStyles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/구글검색1위.png" alt="구글 검색 1위" />
                                <div className={mainPageStyles.imageOverlay} />
                            </div>
                            <div className={mainPageStyles.box2}>
                                <img className={mainPageStyles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/오늘의레시피.png" alt="오늘의 레시피" />
                                <div className={mainPageStyles.imageOverlay} />
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
}

export default Main;