import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css'
import LoginPage from './pages/login/LoginPage';
import Common from './components/Common/common';
import Agree from './pages/SignIn/agree';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/common' element={<Common />}></Route>  {/* 컴포넌트 디자인용 */}
        <Route path='/agree' element={<Agree />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;