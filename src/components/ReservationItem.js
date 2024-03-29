import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRSVDetail } from "../apis/RSVAPI";
import styles from './ReservationItem.module.css';

function ReservationItem({reservation, restaurantCode, userCode}) {

    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState({
        RSVDate: "",
        RSVTime: "",
        headcount: "",
        avail: ""
    });

    useEffect(
        () => {
            setRestaurant(getRSVDetail(restaurantCode));
        },
        []
    );

    console.log(restaurant);

    const textNavigate = `${restaurantCode} / ${restaurant.RSVDate} / ${restaurant.RSVTime} / ${restaurant.headcount}명`;

    const onClickReservation = () => {
        navigate(`/reservationdetail/${userCode}`, {state: {textNavigate}});
    };

    return (
        <>
            <div key={restaurantCode} onClick={onClickReservation}>
                <div className={styles.ReservationBox}> 
                    <img className={styles.ReservationImgs} src={restaurant.image} alt='reviewImg1'/>
                    <div className={styles.ReservationText}>    
                        <h4>{restaurant.restaurantName}</h4>
                        <p className={styles.Date}>{`${restaurant.RSVDate} ${restaurant.RSVTime}`}</p>
                        <p className={styles.Personnel}>예약 인원 :</p>
                        <p className={styles.PersonnelCount}>{`${restaurant.headcount}명`}</p>
                        <p className={styles.Use}>{restaurant.avail}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationItem;