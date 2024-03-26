<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import usersData from '../data/memDetail.json'; 
import { useNavigate } from 'react-router-dom';
=======
import { useState, useEffect } from 'react';
import usersData from '../data/memDetail.json'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
>>>>>>> bf85dc6cb79b73b38381ff98d3581e8ac9bf1713



function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
<<<<<<< HEAD
  const navigate=useNavigate();
=======
  const {userCode}=useParams();
>>>>>>> bf85dc6cb79b73b38381ff98d3581e8ac9bf1713
  


  const navigate=useNavigate();

  
  useEffect(() => {
    setUsers(usersData);

  }, []);

  
  const handleLogin = () => {
    let userFound = false;
       for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.userId === id && user.userPw === password) {
        userFound = true;
        break;
      }
      
    }
    
   
    if (userFound) {
      setIsLoggedIn(true);
      alert('로그인 되었습니다')
<<<<<<< HEAD
      navigate('/main')
=======
      navigate(`/main`)

>>>>>>> bf85dc6cb79b73b38381ff98d3581e8ac9bf1713
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다');
    }
    
  };


  const onClickHandler=()=>{
    navigate('/signup')
  };

  return (
    <div>
<<<<<<< HEAD
      {isLoggedIn ?  (
=======
      {isLoggedIn ? (
        
>>>>>>> bf85dc6cb79b73b38381ff98d3581e8ac9bf1713
        <div>
          
          <p>반갑습니다, {id}님!</p>

        </div>
       
      ) : (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
           <form style={{ display: 'flex', flexDirection: 'column' }}>
           <label>ID</label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
          
          <button onClick={onClickHandler}>회원가입</button>
          </form>
        </div>
        
      )}
    </div>
   
    
  );
};

export default Login;


