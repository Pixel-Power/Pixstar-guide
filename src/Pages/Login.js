import React, { useState, useEffect } from 'react';
import usersData from '../data/memDetail.json'; 

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  
 

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
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다');
    }
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>반갑습니다, {id}님!</p>
          <button onClick={handleLogout}>Logout</button>
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
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

