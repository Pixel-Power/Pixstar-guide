import { useParams, useNavigate } from 'react-router-dom';
import siteMapStyles from './SiteMap.module.css';
import Swal from 'sweetalert2';

function SiteMap() {

    const navigate = useNavigate();

    const {userCode} = useParams();

    const onClickMypage = () => {

        if (userCode != undefined) {
            navigate(`/mypage/${userCode}`);
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
        }
    };

    return (
        <>
        <div className={siteMapStyles.allbox}>
            <div className={siteMapStyles.titlebox}>
                <p id="Title" style={{fontSize:'20pt', fontWeight:'bold'}}>사이트맵</p>
                <p id="Titleinfo">픽스타 사이트의 모든 메뉴를 한눈에 보실 수 있습니다.</p>
            </div>
            <div className={siteMapStyles.siteMapbox}>
                <div className={siteMapStyles.firstbox}>
                    <a onClick={onClickMypage} style={{fontSize:'15pt', fontWeight:'bold'}}>마이페이지</a>
                    <p>회원가입</p>
                    <p>회원정보</p>
                    <p>리뷰확인</p>
                </div>
                <div className={siteMapStyles.secondbox}>
                    <a href="/popup" style={{fontSize:'15pt', fontWeight:'bold'} }>제휴서비스</a>
                    <p>MD 상품 이용안내</p>
                    <p>문의 게시판</p>
                </div>
                <div className={siteMapStyles.thirdbox}>
                    <a href="/companyinfo" style={{fontSize:'15pt', fontWeight:'bold'}}>픽스타</a>
                    <p>히스토리</p>
                    <p>선정맛집</p>
                    <p>참여단 게시판</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default SiteMap;