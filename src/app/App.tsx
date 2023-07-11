import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { Link } from "react-router-dom";

import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { AppRouter } from "./providers/router";

export const App = () => {
const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main page</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
    </div>
  )
}
