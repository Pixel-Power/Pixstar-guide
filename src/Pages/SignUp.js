import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import userData from '../data/memDetail.json';

function SignUp() {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [cfPassword, setCfPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [isSignedUp, setIsSignedUp] = useState(false);
    

    useEffect(() => {
        setUsers(userData);
    }, [userData]);

    const isDuplicateId = (id) => {
        return users.filter(user => user.userId === id).length > 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "id") setId(value);
        else if (name === "password") setPassword(value);
        else if (name === "cfPassword") setCfPassword(value);
        else if (name === "name") setName(value);
        else if (name === "phone") setPhone(value);
        else if (name === "email") setEmail(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 빈 값 검사
        if (!id || !password || !cfPassword || !name || !phone || !email) {
            alert('모든 필드를 입력해주세요');
            return;
        }

        if (password !== cfPassword) {
            alert('비밀번호와 비밀번호 확인이 일치해야 합니다.');
            return;
        }

        if (isDuplicateId(id)) {
            alert('이미 존재하는 아이디입니다.');
            return;
        }

        // 사용자 데이터 추가
        const newUser = { id, password, cfPassword, name, phone, email };
        setUsers([...users, newUser]);

        setIsSignedUp(true);
        alert('회원가입이 완료되었습니다');
        navigate('/login');
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit}
            >
                <label>id</label>
                <input
                    type="text"
                    name="id"
                    placeholder='아이디를 입력해주세요'
                    value={id}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder='비밀번호를 입력해주세요'
                    value={password}
                    onChange={handleChange}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="cfPassword"
                    placeholder='비밀번호를 입력해주세요'
                    value={cfPassword}
                    onChange={handleChange}
                />
                <label>Name</label>
                <input type="text"
                    name="name"
                    placeholder='이름을 입력해주세요'
                    value={name}
                    onChange={handleChange} />
                <label>Phone</label>
                <input type="text"
                    name="phone"
                    placeholder='전화번호를 입력해주세요'
                    value={phone}
                    onChange={handleChange} />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder='이메일을 입력해주세요'
                    value={email}
                    onChange={handleChange}
                />

                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default SignUp;