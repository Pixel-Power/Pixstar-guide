import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import logStyle from './Logout.module.css';

function Logout() {

    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const navigate=useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/main')
        localStorage.removeItem('isLoggedIn');
      };

    return(
        <div className={logStyle.log}>
            <p>송강님! 로그아웃 하시겠습니까? </p>
          <button className={logStyle.btn} onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Logout;