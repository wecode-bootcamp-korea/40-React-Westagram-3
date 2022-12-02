import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  function checkUser(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const isPassed = userInfo.id.includes('@') && userInfo.password.length >= 5;

  return (
    <header className="Login">
      <div className="loginBox">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input
            name="id"
            onChange={checkUser}
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            maxLength="50"
          />
          <input
            name="password"
            onChange={checkUser}
            className="loginPw"
            type="password"
            placeholder="비밀번호"
          />
          <span className="alertComment">로그인에 실패했습니다</span>
          <button
            className={isPassed ? 'loginBtnActive' : 'loginBtn'}
            onClick={e => {
              navigate('/main-hs');
              // e.preventDefault();
              //   fetch('http://10.58.52.93:3000/user/signin', {
              //     method: 'POST',
              //     headers: {
              //       'Content-Type': 'application/json;charset=utf-8',
              //     },
              //     body: JSON.stringify({
              //       // name: '7조',
              //       // profileImage: './images/hyeseonSeo/camping.jpg',
              //       email: 'gptjs@gmail.com',
              //       password: 'password',
              //     }),
              //   })
              //     .then(res => res.json())
              //     .then(data => console.log(data));
            }}
            disabled={!isPassed}
          >
            로그인
          </button>
          <a
            className="forgetLink"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>
    </header>
  );
};

export default Login;
