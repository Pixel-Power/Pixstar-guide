import styles from './Header2.module.css';
import { Link, useNavigate, useParams } from "react-router-dom";


function Header2() {

    // const [userId, setUserId] = useState();
    const { userCode } = useParams();

    const navigate = useNavigate();


    const onClickHandler = () => {
        navigate(`/mypage/${userCode}`)
    }

    const onClickMain = () => {
        navigate(`/main/${userCode}`)
    }

    const onClickLogout = () => {
        navigate(`/logout/${userCode}`)
    }

    return (

        <header>
            <div className={styles.logobox} onClick={onClickMain}>
                <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo" />
            </div>

            <div className={styles.headerMenu}>
                <img onClick={onClickLogout} src="/images/header-images/Logout Rounded.png" alt="Logout" />
                <img onClick={onClickHandler} src="/images/header-images/Home.png" alt="Home" />
            </div>
        </header>


    );
}

export default Header2;