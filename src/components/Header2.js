import styles from './Header2.module.css';
import { Link } from "react-router-dom";


function Header2(){

    
    
    return(
        
        <header>
            
            <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo"/>
            
            <div className={styles.headerMenu}>
               
            <Link to={'/logout'}>
                <img src="/images/header-images/Logout Rounded.png" alt="Logout"/>
            </Link>
                <img src="/images/header-images/Home.png" alt="Home"/>
            </div>
        </header>

        
    );
}

export default Header2;