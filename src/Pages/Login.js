import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../apis/MemAPI';



function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { userCode } = useParams();

    const [user, setUser] = useState({
        userName : '', 
        userId : '',
        userPw : '',
        userEmail : '',
        userPhone : ''
    });

    useEffect(
        ()=>{
            setUser(getUserDetail(userCode));
        },
        [userCode]
    )

   
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onLoginHandler = () => {
        if (user && (user.userId) === id && (user.userPw) === password) {
            setIsLoggedIn(true);
        } else {
            alert("로그인에 실패했습니다.");
        }
        
    };

    useEffect(() => {
        if (isLoggedIn) {
            alert("로그인이 완료되었습니다.");
        }
    }, [isLoggedIn]);

    return (
        <>
            <h1>로그인</h1>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>ID</label>
                    <input type="id" placeholder="아이디를 입력해주세요" value={id} onChange={onIdHandler} />
                    <label>PASSWORD</label>
                    <input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onPasswordHandler} />

                    <br />
                    <button type="button" onClick={onLoginHandler} >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;