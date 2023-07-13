import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <button onClick={toogleTheme}>TOOGLE</button>
      <AppRouter />
    </div>
  );
};

export default App;
