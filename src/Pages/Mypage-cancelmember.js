import {useNavigate} from 'react-router-dom'

function CancelMember() {

    const navigate=useNavigate();
    const cancelMember = () => {
        if (window.confirm("정말 삭제합니까?")) {
        
            alert("삭제되었습니다.");
            navigate('/main');
      
          } else {
      
          }
      };
    

    return(
        <div>
            <p>회원 탈퇴를 진행하시겠습니까?</p>
            <button onClick={cancelMember}>탈퇴하기</button>
        </div>
    );
}

export default CancelMember;