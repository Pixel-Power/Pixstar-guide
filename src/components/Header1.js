import styles from './Header1.module.css';
import Swal from 'sweetalert2';

import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

function Header1() {

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
        <header>
            <div >
                <Link to={'/'}>
                    <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo" />
                </Link>
            </div>

            <div className={styles.headerMenu}>
                <Link to={'/'}>
                    <img src="/images/header-images/Search.png" alt="Search" />
                </Link>

                <Link to={'/login'}>
                    <img src="/images/header-images/Login.png" alt="Login" />
                </Link>

                <Link to={'/signup'}>
                    <img src="/images/header-images/Add User Male.png" alt="Sign Up" />
                </Link>

                    <img onClick={onClickMypage} src="/images/header-images/Home.png" alt="MyPage" />
                    
            </div>
        </header>
    );
}

export default Header1;