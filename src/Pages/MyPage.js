import { Link } from 'react-router-dom';
import styles from './MyPage.module.css';

function MyPage(){
    return(
        <div className={styles.MyPage1}>
            <div className={styles.UserBox}>
                <img className={styles.UserImg} src="/images/myPage-images/memberImg.png" alt="UserImg"/>
                <div className={styles.UserNameBox}>
                    <p className={styles.UserName}>송강</p>님
                    <p className={styles.UserIntroduce}>주요 활동 지역 :</p>
                </div>
                <Link to="/mypagememberout">
                    <img src="/images/myPage-images/editImg.png" alt="UserEdit"/>
                </Link>
            </div>
            <div>
                <button className={styles.Button}>리뷰</button>
                <button className={styles.Button}>예약</button>
            </div>
            <div>
                <div reviewBoxAll>
                    
                        <div className={styles.reviewBox}> 
                            <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg1'/>
                            <h5>햄버거 맛집</h5>
                            <img src="/images/myPage-images/5star.png" alt='5star'/>
                            <br/>
                            치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                        </div>
                    
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/chinesefood/chinesefood (1).jpg" alt='reviewImg2'/>
                        <h5>중식 맛집</h5>
                        <img src="/images/myPage-images/5star.png" alt='5star'/>
                        <br/>
                        음식이 너무 아름답고 사장님이 화끈합니다. 인생 최고의 중국 음식 맛집❤
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg3'/>
                        <h5>햄버거 맛집</h5>
                        <img src="/images/myPage-images/5star.png" alt='5star'/>
                        <br/>
                        치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                    </div>
                </div>
                <div reviewBoxAll>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg4'/>
                        <h5>햄버거 맛집</h5>
                        <img src="/images/myPage-images/5star.png" alt='5star'/>
                        <br/>
                        치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg5'/>
                        <h5>햄버거 맛집</h5>
                        <img src="/images/myPage-images/5star.png" alt='5star'/>
                        <br/>
                        치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg6'/>
                        <h5>햄버거 맛집</h5>
                        <img src="/images/myPage-images/5star.png" alt='5star'/>
                        <br/>
                        치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;