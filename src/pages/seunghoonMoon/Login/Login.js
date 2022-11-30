import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   return <h1> 3팀 문승훈 로그인 페이지입니다 </h1>;

function Login() {
  // const [state, setState] = useState();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };
  // const [isActive, setIsActive] = useState(false);

  const Btn = id.includes('@') && pw.length > 5 ? 'activeBtn' : 'unactiveBtn';

  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');
  const navi = useNavigate();
  const handleClick = () => {
    alert('hi');
    navi('/main-sh');
  };
  // // const handleIdInput = event => {
  //   setId(event.target.value);
  // };
  // const handlePasswordInput = event => {
  //   setPw(event.target.value);
  // };
  // const [isActive, setIsActive] = useState(false);
  // const isPassedLogin = () => {
  //   return id.includes('@') && pw.length > 5
  //     ? setIsActive(true)
  //     : setIsActive(false);
  // };
  return (
    <div>
      <div className="login">
        <h1 className="Logintitle"> westargram </h1>
        <div className="body">
          <form action="main.html">
            <div className="loginbox">
              {/* <!-- <div className="loginSection"> --> */}
              <input
                onChange={handleIdInput}
                className="id"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
                // onChange={() => }
              />
              <input
                className="pw"
                type="password"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
              <button
                type="button"
                onClick={handleClick}
                className={Btn}
                disabled={id === '' || pw === '' ? true : false}
              >
                로그인
              </button>
              {/* <!-- </div> --> */}
            </div>
            <p className="font">비밀번호를 잊으셨나요?</p>
          </form>
        </div>
      </div>
      {/* <Link to='/main'>메인으로 이동 </Link> */}
    </div>
  );
}

export default Login;
