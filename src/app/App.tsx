import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { Link } from "react-router-dom";

import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}
