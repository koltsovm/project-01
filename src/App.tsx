import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter"
import './index.scss';
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main page</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
