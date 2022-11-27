import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const isPassed = id.includes('@') && password.length >= 5;
  const checkPass = isPassed ? false : true;

  return (
    <header className="Login">
      <div className="loginBox">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input
            onChange={({ target }) => {
              setId(target.value);
            }}
            className="loginId"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            maxLength="50"
          />
          <input
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            className="loginPw"
            type="password"
            placeholder="비밀번호"
          />
          <span className="alertComment">로그인에 실패했습니다</span>
          <button
            className={isPassed ? 'loginBtnActive' : 'loginBtn'}
            disabled={checkPass}
            onClick={() => {
              navigate('/main-hs');
            }}
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
