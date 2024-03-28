import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from './MyPage-reservation.module.css';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../apis/MemAPI'
import { getRSVDetail } from '../apis/RSVAPI';

function Reservation(){

    const { userCode } = useParams();
    const navigate = useNavigate();

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
                    <p className={styles.UserIntroduce}>주요 활동 지역 :</p>
                </div>
                <Link to="/mypagememberout">
                    <img src="/images/myPage-images/editImg.png" alt="UserEdit"/>
                </Link>
            </div>
            <div>
                <NavLink to={`/mypage/${user.userCode}`}>
                    <button className={styles.Button1}>리뷰</button>
                </NavLink>
                <button className={styles.Button2}>예약</button>
            </div>
            <div>
                <div>
                    <Link to={`/reservationdetailfake/${userCode}`}>
                        <div className={styles.ReservationBox}> 
                            <img className={styles.ReservationImgs} src="/images/food/pasta/pasta (6).jpg" alt='reviewImg1'/>
                            <div className={styles.ReservationText}>
                                <h4>류니끄</h4>
                                <p className={styles.Date}>2024.04.01 오후 6:30</p>
                                <p className={styles.Personnel}>예약 인원 :</p>
                                <p className={styles.PersonnelCount}>3명</p>
                                <p className={styles.Use}>이용 전</p>
                            </div>
                        </div>
                    </Link>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/dessert/dessert (3).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>도미니크앤존</h4>
                            <p className={styles.Date}>2024.05.05 오후 7:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>9명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/japanesefood/japanesefood (12).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>히노</h4>
                            <p className={styles.Date}>2024.03.07 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>7명</p>
                            <p className={styles.Use}>이용 완료</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/koreanfood/koreanfood (15).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>구름식당</h4>
                            <p className={styles.Date}>2024.04.12 오후 6:00</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>2명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/japanesefood/japanesefood (7).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>하쿠시</h4>
                            <p className={styles.Date}>2024.02.27 오후 8:00</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>5명</p>
                            <p className={styles.Use}>이용 완료</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/koreanfood/koreanfood (1).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>청와옥</h4>
                            <p className={styles.Date}>2024.01.20 오후 8:00</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>3명</p>
                            <p className={styles.Use}>이용 완료</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservation;