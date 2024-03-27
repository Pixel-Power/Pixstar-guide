import styles from './Header1.module.css';
import { Link } from "react-router-dom";
function Header1(){


    return(
        <header>
            <div>
                <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo"/>
            </div>

            <div className={styles.headerMenu}>
               <Link to={'/'}>
                    <img src="/images/header-images/Search.png" alt="Search"/>
                </Link>

                <Link to={'/login'}>
                    <img src="/images/header-images/Login.png" alt="Login"/>
                </Link>

                <Link to={'/signup'}>
                    <img src="/images/header-images/Add User Male.png" alt="Sign Up"/>
                </Link>
                
                <Link to={'/login'}>
                    <img src="/images/header-images/Home.png" alt="MyPage"/>
                </Link>
            </div>
        </header>
    );
}

export default Header1;