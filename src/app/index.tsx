import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";

import "./styles/index.scss";
import { Footer } from "widgets/Footer";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
