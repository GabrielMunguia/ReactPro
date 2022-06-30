
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from "../logo.svg";
import { showActive } from '../../helpers/showActive';
import { routes } from './routes';
import { Suspense } from "react";



export const Navigation = () => {
 

  return (
    <Suspense  fallback={<div className="bg-gray-900 min-h-screen  text-white"><span>Loading....</span></div>}>
      <BrowserRouter>
      <div className="flex bg-gray-900 min-h-screen  text-white">
        <nav className="bg-slate-700 text-white w-60 ">
          <img src={logo} />

          <ul className="flex justify-center items-center flex-col ">
            {
              routes.map((route,i)=>{
                return  <li key={i}  className="mt-2">
                <NavLink to={route.to}  className={showActive} >{route.name}</NavLink>
              </li>
              })
            }
            
          </ul>
        </nav>

        <Routes>
        {
              routes.map(({Component,path},i)=>{
                return  <Route key={i+1} path={path} element={<Component/>}/>
           
              })
            }
         
        
          <Route path="/*"      element={<Navigate to={routes[1].to} replace/>}  />
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};
