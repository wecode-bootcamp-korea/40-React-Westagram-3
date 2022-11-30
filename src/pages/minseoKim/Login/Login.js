import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      navigate('/main-ms');
    } else {
      alert('가입된 회원이 아닙니다. 회원가입을 진행하시겠습니까?');
    }
  };

  const [active, setActive] = useState(false);
  const [idValue, setIdInput] = useState('');
  const [pwValue, setPwInput] = useState('');
  console.log(idValue);
  console.log(pwValue);

  const activeIsPassedLogin = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };
  const handlePw = e => {
    setPwInput(e.target.value);
  };

  return (
    <section className="login">
      <form action="" method="post" className="loginForm">
        <div className="logo_box">
          <div className="logo">Westagram</div>
        </div>
        <div className="idForm">
          <input
            type="text"
            id="id"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={activeIsPassedLogin}
            onChange={handleId}
          />
        </div>
        <div className="passForm">
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            onKeyUp={activeIsPassedLogin}
            onChange={handlePw}
          />
        </div>
        <button
          type="button"
          onClick={goToMain}
          className={active ? 'activeLoginBtn' : 'loginBtn'}
          disabled={idValue === '' || pwValue === '' ? true : false}
        >
          로그인
        </button>
        <div className="findPw">비밀번호를 잊으셨나요?</div>
      </form>
    </section>
  );
}
export default Login;
