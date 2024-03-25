
import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import * as moment from 'moment-timezone';
import 'react-calendar/dist/Calendar.css'   // css import
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './CalendarModal.module.css';

function CalendarModal () {

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

    useEffect(() => {
        return () => {
            console.log('clean-up...')
        }
    })

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
    };

    const onClickReservation = () => {
        const text = `${formattedDate} ${bookTime} / ${count}명`;
        setReservation(text);
        setIsOpen(false)
    }; 
    return (
        <>
            <div>
                <div className={styles.reservationBox}>
                    <div className={styles.calendarIconTextBox}>
                        <img className={styles.calendarIcon} src="/images/restaurant-detail/calendar.png"></img>
                        <div className={styles.reservationText}>{reservation}</div>
                    </div>
                <Button className={styles.vIcon} variant="light" onClick={openHandler}>V</Button>
                </div>
                <Modal className={styles.calendarBoxModal} show={isOpen} onHide={closeHandler}>

                    <Modal.Body>
                    <div className={styles.calendarBox}>
                        <Calendar className={styles.calendar} onChange={setDate} value={date} 
                            formatDay={(locale, date) => moment(date).format("DD")} 
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
                            <input className={styles.timeButton} type="button" value={timeList[0]} onClick={onClickTime}/>
                            <input className={styles.timeButton} type="button" value={timeList[1]} onClick={onClickTime}/>
                            <input className={styles.timeButton} type="button" value={timeList[2]} onClick={onClickTime}/>
                            <input className={styles.timeButton} type="button" value={timeList[3]} onClick={onClickTime}/>
                            <input className={styles.timeButton} type="button" value={timeList[4]} onClick={onClickTime}/>
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={styles.closeButton} variant='outline-danger' onClick={onClickReservation}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className={styles.timeBox1}>
                    <input className={styles.timeItem1} type="button" value={timeList[0]} onClick={e => {const text = `${formattedDate} ${bookTime} / ${count}명`;
        setReservation(text);}}/>
                    <input className={styles.timeItem1} type="button" value={timeList[1]} onClick={onClickTime}/>
                    <input className={styles.timeItem1} type="button" value={timeList[2]} onClick={onClickTime}/>
                    <input className={styles.timeItem1} type="button" value={timeList[3]} onClick={onClickTime}/>
                    <input className={styles.timeItem1} type="button" value={timeList[4]} onClick={onClickTime}/>
                </div>
                <button className={styles.reservationButton}>예약하기</button>
            </div>
        </>
    );
};

export default CalendarModal;