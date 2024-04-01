import { Link, NavLink, useParams } from 'react-router-dom';
import styles from './MyPage.module.css';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../apis/MemAPI'

function MyPage(){

    const {userCode} = useParams();

    const [user, setUser] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userEmail: '',
        userPhone: ''
    });

    useEffect(
        () => {
            setUser(getUserDetail(userCode))
        },
        []
    );
    
    return(
        <div className={styles.MyPage1}>
            <div className={styles.UserBox}>
                <img className={styles.UserImg} src="/images/myPage-images/memberImg.png" alt="UserImg"/>
                <div className={styles.UserNameBox}>
                    <p className={styles.UserName}>{user.userName}</p>님
                    <p className={styles.UserIntroduce}>주요 활동 지역 : 서울 강남구</p>
                </div>
                <Link to="/cancelmember">
                    <img src="/images/myPage-images/editImg.png" alt="UserEdit"/>
                </Link>
            </div>
            <div>
                <button className={styles.Button1}>리뷰</button>
                <NavLink to={`/reservation/${user.userCode}`}>
                    <button className={styles.Button2}>예약</button>
                </NavLink>
            </div>
            <div>
                <div>
                
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/hamburger/hamburger (1).jpg" alt='reviewImg1'/>
                        <h4>버거퀸</h4>
                        <img src="/images/myPage-images/5STAR.png" alt='5STAR'/>
                        <br/>
                        치즈버거가 너무 잘생겼고 사장님이 맛있습니다. 인생 최고의 햄버거 맛집
                    </div>
                
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/chinesefood/chinesefood (1).jpg" alt='reviewImg2'/>
                        <h4>만리장성</h4>
                        <img src="/images/myPage-images/4STAR.png" alt='4STAR'/>
                        <br/>
                        음식이 너무 아름답고 사장님이 화끈합니다. 인생 최고의 중국 음식 맛집❤
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/steak/steak (5).jpg" alt='reviewImg3'/>
                        <h4>Steakhouse Delight</h4>
                        <img src="/images/myPage-images/3STAR.png" alt='3STAR'/>
                        <br/>
                        숯불에서 구운 스테이크가 너무 부드러워서 지인들에게 추천 가능 맛집 b
                    </div>
                </div>
                <div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/pasta/pasta (6).jpg" alt='reviewImg4'/>
                        <h4>류니끄</h4>
                        <img src="/images/myPage-images/4STAR.png" alt='4STAR'/>
                        <br/>
                        정말 맛있습니다 또 가고 싶은 곳이네요 다음에 다른 메뉴도 먹어보고 싶어요ㅠㅜ
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/salad/salad (6).jpg" alt='reviewImg5'/>
                        <h4>Salad & Greek yogurt</h4>
                        <img src="/images/myPage-images/3STAR.png" alt='3STAR'/>
                        <br/>
                        몸관리 때문에 샐러드 먹습니다...그래도 맛있는 거 먹고 싶어서 찾았는데 존맛탱
                    </div>
                    <div className={styles.reviewBox}> 
                        <img className={styles.reviewImgs} src="/images/food/pizza/pizza (4).jpg" alt='reviewImg6'/>
                        <h4>Secret Oven Pizzeria</h4>
                        <img src="/images/myPage-images/5STAR.png" alt='5STAR'/>
                        <br/>
                        화덕피자 만세만세 만만세ㅠㅠ 너무 맛있다 진짜 여기가 화덕피자 TOP
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;