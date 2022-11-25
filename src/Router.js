import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 서혜선의 컴포넌트
import LoginHS from './pages/hyeseonSeo/Login/Login';
import MainHS from './pages/hyeseonSeo/Main/Main';

// 김민서의 컴포넌트
import LoginMS from './pages/minseoKim/Login/Login';
import MainMS from './pages/minseoKim/Main/Main';

// 권오규의 컴포넌트
import LoginOG from './pages/ohgyuKwon/Login/Login';
import MainOG from './pages/ohgyuKwon/Main/Main';

// 문승훈의 컴포넌트
import LoginSH from './pages/seunghoonMoon/Login/Login';
import MainSH from './pages/seunghoonMoon/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login-hs" element={<LoginHS />} />
        <Route path="/main-hs" element={<MainHS />} />
        <Route path="/login-ms" element={<LoginMS />} />
        <Route path="/main-ms" element={<MainMS />} />
        <Route path="/login-og" element={<LoginOG />} />
        <Route path="/main-og" element={<MainOG />} />
        <Route path="/login-sh" element={<LoginSH />} />
        <Route path="/main-sh" element={<MainSH />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
