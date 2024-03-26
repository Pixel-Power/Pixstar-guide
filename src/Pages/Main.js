import styles from './Main.module.css';

function Main() {

    const onClickHandler = () => {
        alert("서비스 준비중 입니다.");
    }


    return (
        <>
        <>

            <div>
                <img src="/images/mainPage-images/검색창 배경.png" alt="검색창 배경" />
            </div>
        </>
        <>
                <div className={styles.allBox}>
                    <div className={styles.row1}>
                        <div className={styles.box1}>
                            <img className={styles.menuImage} src="/images/mainPage-images/이달의 식당.jpg" alt="이달의 식당" />
                            <div className={styles.imageOverlay}>
                                <p className={styles.overlayText}>이달의 식당</p>
                            </div>
                        </div>
                        <div className={styles.box1}>
                            <img className={styles.menuImage} src="/images/mainPage-images/이달의 식당.jpg" alt="픽스타 매거진" />
                            <div className={styles.imageOverlay}>
                                <p className={styles.overlayText}>픽스타 매거진</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.row1}>
                        <div className={styles.box1}>
                            <img className={styles.menuImage} src="/images/mainPage-images/체험단.png" />
                            <p> pix 체험단
                            </p>
                            <button type="button" onClick={onClickHandler}>신청하기</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.row2}>
                        <div className={styles.box2}>
                            <img className={styles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/커피의효능.png" alt="커피의 효능" />
                            <div className={styles.imageOverlay} />
                        </div>
                        <div className={styles.box2}>
                            <img className={styles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/구글검색1위.png" alt="구글 검색 1위" />
                            <div className={styles.imageOverlay} />
                        </div>
                        <div className={styles.box2}>
                            <img className={styles.menuImage} onClick={onClickHandler} src="/images/mainPage-images/오늘의레시피.png" alt="오늘의 레시피" />
                            <div className={styles.imageOverlay} />
                        </div>
                    </div>
                </div>
            </></>

    );
}

export default Main;