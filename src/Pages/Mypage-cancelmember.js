import CancelModal from "../components/CancelModal";
import styles from "../components/CancelModal.module.css";

function CancelMember() {

    return(

        <div className={styles.cancel}>
            <h3>회원 탈퇴 신청 시 아래 사항을 반드시 확인해주세요.</h3>
            <h4>1. 해당 휴대폰번호로 30일간 재가입 불가능</h4>
            <p>회원탈퇴를 신청하시면 해당 계정은 즉시 탈퇴처리되며 기존에 사용하던 휴대폰번호로는 30일 동안 재가입이 불가합니다.</p>
            <br/>
            <h4>2. 회원정보 삭제</h4>
            <p>회원탈퇴 즉시 아래에 해당하는 개인정보가 삭제됩니다.</p>
            <p>개인정보 :  아이디, 비밀번호, 이메일, 휴대폰 번호 정보 삭제</p>
            <br/>
            <p className={styles.canceltext}>회원 탈퇴하기</p>
            <CancelModal/>
        </div>
    );
}

export default CancelMember;