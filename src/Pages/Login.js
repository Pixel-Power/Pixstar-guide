import { useState, useEffect } from 'react';
import { getUserList } from '../apis/MemAPI';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
 
  const navigate = useNavigate();

  useEffect(() => {
    setUserList(getUserList());
  }, []);

  const handleLogin = () => {
    const user = userList.find(user => user.userId === id && user.userPw === password);
    if (user) {
      setIsLoggedIn(true);
      alert('로그인 되었습니다');
      navigate(`/main/${user.userCode}`);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다');
    }
  };

  const onClickHandler = () => {
    navigate('/signup');
  };

  return (
    <div>
        <div style={{margin: '5%',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: '100%', height: '100vh', }}>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>ID</label>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{ width: '100%', padding: '12px', marginBottom: '15px' }}/>
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px', marginBottom: '15px' }}/>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <button onClick={handleLogin} style={{ width: '70%', padding: '3px 5px', marginTop: '15px' }}>로그인</button>
            <button onClick={onClickHandler} style={{ width: '80%', padding: '3px 5px', marginTop: '15px' }}>회원이 아니신가요?</button>
            </div>
          </form>
    </div>
    </div>
  );
  };

export default Login;