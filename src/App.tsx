import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css'
import LoginPage from './pages/login/LoginPage';
import Common from './components/Common/common';
import BaseForm from './components/baseForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseForm />}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/common' element={<Common/>}></Route>  {/* 컴포넌트 디자인용 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;