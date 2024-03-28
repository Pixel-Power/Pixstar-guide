import styles from './Header2.module.css';
import { Link, useNavigate, useParams } from "react-router-dom";




function Header2(){
  const navigate=useNavigate();
  const {userCode}=useParams();

    const onClickHandler = () => {
          navigate(`/mypage/${userCode}`);
      };

   
    return(

        
        <header>
            
            <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo"/>
            
            <div className={styles.headerMenu}>
               
            <Link to={'/logout'}>
                <img src="/images/header-images/Logout Rounded.png" alt="Logout"/>
            </Link>

           
            <div onClick={onClickHandler}>
                <img src="/images/header-images/Home.png" alt="Home"/>
            </div>
                
            
            </div>
        </header>

        
    );


}
    export default Header2;