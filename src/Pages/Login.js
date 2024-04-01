import { useState, useEffect } from 'react';
import { getUserList } from '../apis/MemAPI';
import { useNavigate } from 'react-router-dom';
import LogStyle from './Login.module.css';


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
        <div className={LogStyle.box}>
          <form className={LogStyle.form}>
            <label className={LogStyle.idpw}>ID</label>
            <input
              className={LogStyle.id}
              type="text"
              placeholder="아이디를 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}/>
            <label className={LogStyle.idpw}>PASSWORD</label>
            <input
              className={LogStyle.id}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <div className={LogStyle.apply}>
              <button onClick={handleLogin} className={LogStyle.login}>로그인</button>
              <button onClick={onClickHandler} className={LogStyle.login}>회원이 아니신가요?</button>
            </div>
          </form>
    </div>
    </div>
  );
  };

export default Login;