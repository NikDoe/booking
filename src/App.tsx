import { Link, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

import "./index.scss";

const App = () => {
  return (
    <>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
