import styles from './Header2.module.css';
import { Link, useNavigate } from "react-router-dom";
import { getUserDetail, getUserList } from '../apis/MemAPI';
import { useState, useEffect } from 'react';


function Header2() {

    // const [userId, setUserId] = useState();
    const userCode = 1;

    const navigate = useNavigate();


    const onClickHandler = () => {
        navigate(`/mypage/${userCode}`)
    }
    return (

        <header>
                <div onClick={onClickHandler}>
                <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo" />
                </div>

            <div className={styles.headerMenu}>

                <Link to={'/logout'}>
                    <img src="/images/header-images/Logout Rounded.png" alt="Logout" />
                </Link>
                <div onClick={onClickHandler}>
                    <img src="/images/header-images/Home.png" alt="Home" />
                </div>
            </div>
        </header>


    );
}

export default Header2;