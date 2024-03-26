import { Link, NavLink, useParams } from 'react-router-dom';
import styles from './MyPage-reservation.module.css';
import { useEffect, useState } from 'react';
import { usersDataList } from '../apis/MemAPI'

function Reservation(){

    const { userCode } = useParams();

    const [user, setUser] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userEmail: '',
        userPhone: ''
    });

    useEffect(
        () => {
            setUser(usersDataList(userCode))
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
                    <Link to="/reservationdetail">
                        <div className={styles.ReservationBox}> 
                            <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                            <div className={styles.ReservationText}>
                                <h4>양귀족 양꼬치 양갈비</h4>
                                <p className={styles.Date}>2024.03.25 오후 6:30</p>
                                <p className={styles.Personnel}>예약 인원 :</p>
                                <p className={styles.PersonnelCount}>6명</p>
                                <p className={styles.Use}>이용 전</p>
                            </div>
                        </div>
                    </Link>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>양귀족 양꼬치 양갈비</h4>
                            <p className={styles.Date}>2024.03.25 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>6명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>양귀족 양꼬치 양갈비</h4>
                            <p className={styles.Date}>2024.03.25 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>6명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>양귀족 양꼬치 양갈비</h4>
                            <p className={styles.Date}>2024.03.25 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>6명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>양귀족 양꼬치 양갈비</h4>
                            <p className={styles.Date}>2024.03.25 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>6명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                    <div className={styles.ReservationBox}> 
                        <img className={styles.ReservationImgs} src="/images/food/chinesefood/chinesefood (13).jpg" alt='reviewImg1'/>
                        <div className={styles.ReservationText}>    
                            <h4>양귀족 양꼬치 양갈비</h4>
                            <p className={styles.Date}>2024.03.25 오후 6:30</p>
                            <p className={styles.Personnel}>예약 인원 :</p>
                            <p className={styles.PersonnelCount}>6명</p>
                            <p className={styles.Use}>이용 전</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservation;