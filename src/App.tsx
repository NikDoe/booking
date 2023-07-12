import { Link, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import "./styles/index.scss";

const App = () => {
  return (
    <div className='app dark'>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
