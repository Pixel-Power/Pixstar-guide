import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../apis/MemAPI';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetail(userCode);
        setId(userData.userId);
        setPassword(userData.userPw);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [userCode]);

  const handleLogin = () => {
    if (id === '' || password === '') {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    setIsLoggedIn(true);
    alert('로그인 되었습니다.');
    navigate(`/main/${userCode}`);
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>반갑습니다, {id}님!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
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
            <button type="button" onClick={handleLogin}>로그인</button>
            <button type="button" onClick={handleSignup}>회원가입</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;