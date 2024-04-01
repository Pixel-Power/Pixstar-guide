import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'   // css import
import Modal from 'react-bootstrap/Modal';
import styles from './CancelModal.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CalendarModal () {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = () => setIsOpen(false);

    const onClickRealReservation = () => {

            Swal.fire({
                icon: "warning",
                title: "회원탈퇴",
                text: "회원 탈퇴를 진행하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "예",
                cancelButtonText: "아니오",
                confirmButtonColor: '#f65f67', 
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate("/main");
                }
                else {}
            });
        };
    

    return (
        <>
            <div className={styles.cancelBox}>
                <Modal className={styles.cancelBoxModal} show={isOpen} onHide={closeHandler}></Modal>
                <button className={styles.cancelButton} onClick={onClickRealReservation}>탈퇴하기</button>
            </div>
        </>
    );
};

export default CalendarModal;