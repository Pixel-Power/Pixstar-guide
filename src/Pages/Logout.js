import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Logout() {

    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const navigate=useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/main')
        localStorage.removeItem('isLoggedIn');
      };

    return(
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: '100%', height: '100vh'
      }}>
            <p>송강님! 로그아웃 하시겠습니까?</p>
          <button onClick={handleLogout}>Logout</button>


          
        </div>
    )

}

export default Logout;