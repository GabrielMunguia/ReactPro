import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "../logo.svg";
import { showActive } from '../../helpers/showActive';

export const Navigation = () => {
 

  return (
    <BrowserRouter>
      <div className="flex bg-gray-900 min-h-screen text-white">
        <nav className="bg-slate-700 text-white w-60 ">
          <img src={logo} />
          <ul className="flex justify-center items-center flex-col">
            <li className="mt-2">
              <NavLink to="/"  className={showActive} >Home</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="/about"  className={showActive} >About</NavLink>
            </li>

            <li className="mt-2">
              <NavLink to="/user"  className={showActive} >User</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about"  element={<h1 >About</h1>}/>
          <Route path="user"   element={<h1 >User</h1>} />
          <Route path="/"      element={<h1 >Home </h1>} />
          <Route path="/*"      element={<Navigate to="/" replace/>}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
