import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css'
import LoginPage from './pages/login/login';
import Common from './components/common';
import Agree from './pages/signIn/agree';
import SignIn from './pages/signIn/signIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/common' element={<Common/>}></Route>  {/* 컴포넌트 디자인용 */}
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/agree' element={<Agree/>}></Route>
          <Route path='/signIn' element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;