
import { Navigate, NavLink, Routes } from 'react-router-dom';
import { LazyPage1 } from '../pages/LazyPage1';
import { Route } from 'react-router-dom';
import { LazyPage2, LazyPage3 } from '../pages';
export const LazyLayout = () => {
  return (
    <div className='-200 w-full'>
      
        <div className='bg-slate-600 w-90'>
            <ul className='flex justify-center   p-2'>
                <li>
                    <NavLink className="mr-10 bg-blue-800 p-2 rounded-md" to="page1">LazyPage1</NavLink>
                </li>
                <li>
                    <NavLink className="mr-10 bg-blue-800 p-2 rounded-md" to="page2">LazyPage2</NavLink>
                </li>
                <li>
                    <NavLink className="mr-10 bg-blue-800 p-2 rounded-md" to="page3">LazyPage3</NavLink>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path="page1" element={<LazyPage1 />} />
            <Route path="page2" element={<LazyPage2 />} />
            <Route path="page3" element={<LazyPage3 />} />
            <Route path="*" element={<Navigate replace to="page1"/>} />
        </Routes>
    </div>
  )
}

export default LazyLayout;
