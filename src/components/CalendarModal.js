
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'   // css import
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './CalendarModal.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CalendarModal ({ code, userCode}) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = () => setIsOpen(false);

    const openHandler = () => setIsOpen(true);

    const [date, setDate] = useState(new Date());

    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    console.log(`Date : ${date}`);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 (${dayList[date.getDay()]})`;
    console.log(formattedDate);
    const [count, setCount] = useState(1);
    const [bookTime, setBookTime] = useState('');
    const timeList = ['오후 6:00', '오후 6:30', '오후 7:00', '오후 7:30', '오후 8:00'];
    const [reservation, setReservation] = useState(`오늘(${dayList[date.getDay()]}) / 2명`);

    const [btnActive, setBtnActive] = useState("");

    const onClickPlus = () => {
        setCount(count + 1);
    }

    const onClickMinus = () => {
        const count2 = (count > 0)? count - 1 : 0;
        setCount(count2); 
    }
    console.log(`입력하신 인원은 ${count}명 입니다.`);

    const onClickTime = e => {
        setBookTime(e.target.value);
        console.log(bookTime);
        setBtnActive(e.target.value);
        console.log(btnActive);
    };

    const onClickReservation = () => {
        const text = `${code} / ${formattedDate} / ${bookTime} / ${count}명`;
        setReservation(text);
        setIsOpen(false)
    }; 

    const onClickRealReservation = () => {

        if (userCode != 0) {
            navigate(`/reservationdetail/${userCode}_${code}`, {state: {reservation}});
        }
        else {
            Swal.fire({
                icon: "warning",
                title: "회원 전용 서비스 입니다.",
                text: "로그인 창으로 이동하겠습니까?",
                showCancelButton: true,
                confirmButtonText: "예",
                cancelButtonText: "아니오",
                confirmButtonColor: '#f65f67', 
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate("/login");
                }
                else {}
            });
            // alert('회원만 이용가능한 서비스 입니다.');
            // navigate("/login");
        }
    };

    return (
        <>
            <div>
                <div className={styles.reservationBox}>
                    <div className={styles.calendarIconTextBox}>
                        <img className={styles.calendarIcon} src="/images/restaurant-detail/calendar.png"></img>
                        <div className={styles.reservationText}>{reservation}</div>
                        <Button className={styles.vIcon} variant="light" onClick={openHandler}>V</Button>
                    </div>
                </div>
                <Modal className={styles.calendarBoxModal} show={isOpen} onHide={closeHandler}>

                    <Modal.Body>
                    <div className={styles.calendarBox}>
                        <Calendar className={styles.calendar} onChange={setDate} value={date} 
                            // formatDay={(locale, date) => moment(date).format("DD")} 
                            formatDay={(locale, date) => date.getDate()} 
                            calendarType='gregory' prev2Label={null} next2Label={null}
                            showNeighboringMonth={false}/>
                        <div className={styles.line}>
                            <hr/>
                        </div>
                        <div className={styles.numberText}>
                            <p>인원</p>
                        </div>
                        <div className={styles.countBox}>
                            <button id={styles.countButton} onClick={onClickMinus}>-</button>
                            <div className={styles.numberBox}>
                                <div id={styles.countNumber}>&nbsp;{count}&nbsp;</div>
                            </div>
                            <button id={styles.countButton} onClick={onClickPlus}>+</button>
                        </div>
                        <div className={styles.timeBox}>
                            <input className={styles.timeButton} type="button" value={timeList[0]} onClick={onClickTime} style={{backgroundColor: (btnActive === timeList[0])? "rgb(251, 75, 85)":"gray"}}/>
                            <input className={styles.timeButton} type="button" value={timeList[1]} onClick={onClickTime} style={{backgroundColor: (btnActive === timeList[1])? "rgb(251, 75, 85)":"gray"}}/>
                            <input className={styles.timeButton} type="button" value={timeList[2]} onClick={onClickTime} style={{backgroundColor: (btnActive === timeList[2])? "rgb(251, 75, 85)":"gray"}}/>
                            <input className={styles.timeButton} type="button" value={timeList[3]} onClick={onClickTime} style={{backgroundColor: (btnActive === timeList[3])? "rgb(251, 75, 85)":"gray"}}/>
                            <input className={styles.timeButton} type="button" value={timeList[4]} onClick={onClickTime} style={{backgroundColor: (btnActive === timeList[4])? "rgb(251, 75, 85)":"gray"}}/>
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={styles.closeButton} variant='outline-danger' onClick={onClickReservation}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className={styles.reservationButton} onClick={onClickRealReservation}>예약하기</button>
            </div>
        </>
    );
};

export default CalendarModal;