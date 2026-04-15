import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header_gpt4';
import Footer from './components/Footer/Footer_gpt5';

function App() {
  const location = useLocation();

  return (
    <>
   
      <Header />
        <Footer />
      {/* Ví dụ nếu bạn có dùng Routes:
      <Routes>
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes> 
      */}
    </>
  );
}

export default App;