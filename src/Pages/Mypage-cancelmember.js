import CancelModal from "../components/CancelModal";
import styles from "../components/CancelModal.module.css";

function CancelMember() {

    return(
        <div className={styles.cancel}>
            <p className={styles.canceltext}>회원 탈퇴하기</p>
            <CancelModal/>
        </div>
    );
}

export default CancelMember;