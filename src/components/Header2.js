import styles from './Header2.module.css';
<<<<<<< HEAD
import { Link, useNavigate, useParams } from "react-router-dom";




function Header2(){
  const navigate=useNavigate();
  const {userCode}=useParams();

    const onClickHandler = () => {
          navigate(`/mypage/${userCode}`);
      };

   
=======
import { Link, useNavigate } from "react-router-dom";
import { getUserDetail, getUserList } from '../apis/MemAPI';
import { useState, useEffect } from 'react';


function Header2(){
    
    // const [userId, setUserId] = useState();
    const userCode = 1;

    const navigate = useNavigate();
    

    const onClickHandler = () => {
        navigate(`/mypage/${userCode}`)
    }
>>>>>>> 3e325c17cc8334bec390f0857ef6b4055af82062
    return(

        
        <header>
            
            <img className={styles.logoImg} src="/images/header-images/pixstar-guide-logo.png" alt="PixSTAR Guide Logo"/>
            
            <div className={styles.headerMenu}>
               
            <Link to={'/logout'}>
                <img src="/images/header-images/Logout Rounded.png" alt="Logout"/>
            </Link>
<<<<<<< HEAD

           
            <div onClick={onClickHandler}>
                <img src="/images/header-images/Home.png" alt="Home"/>
            </div>
                
            
=======
            <div onClick={onClickHandler}>
                <img src="/images/header-images/Home.png" alt="Home"/>
            </div>
>>>>>>> 3e325c17cc8334bec390f0857ef6b4055af82062
            </div>
        </header>

        
    );


}
    export default Header2;