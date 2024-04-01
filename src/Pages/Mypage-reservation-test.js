import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from './Mypage-reservation-test.module.css';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../apis/MemAPI'
import { getRSVList, getRSVDetail } from '../apis/RSVAPI';
import ReservationItem from '../components/ReservationItem';

function ReservationTest(){

    const { userCode } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: '',
        userId: '',
        userPw: '',
        userEmail: '',
        userPhone: ''
    });

    const code = 1;

    const [reservationList, setReservationList] = useState([]);
    
    // const [textNavigate, setTextNavigate] = useState("");

    useEffect(
        () => {
            setUser(getUserDetail(userCode));
            setReservationList( getRSVList());
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
                <NavLink to={`/mypage/${user.userCode}`}>
                    <button className={styles.Button1}>리뷰</button>
                </NavLink>
                <button className={styles.Button2}>예약</button>
            </div>
            <div>
                <div className={styles.reservationBox}>
                {reservationList.map(reservation => <ReservationItem key={reservation.restaurantCode} reservation={reservation} restaurantCode={reservation.restaurantCode} userCode={userCode}/>)}
                </div>
                
            </div>
        </div>
    );
}

export default ReservationTest;