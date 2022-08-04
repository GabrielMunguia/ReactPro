 
import { lazy, LazyExoticComponent } from 'react';



 type JSXElement = () => JSX.Element;


 interface routes {
    to: string;
    path: string;
    name: string;
    Component : LazyExoticComponent<JSXElement> |JSXElement;
 }


 const lazy1=lazy(()=>import('../01-lazyload/pages/LazyPage1'));
 const lazy2=lazy(()=>import('../01-lazyload/pages/LazyPage2'));
 const lazy3=lazy(()=>import('../01-lazyload/pages/LazyPage3'));
 const lazy4=lazy(()=>import('../02-component-patterns/pages/ShoppingPage'));
export const routes:routes[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        name: 'Lazy-1',
        Component:lazy1
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        name: 'Lazy-2',
        Component:lazy2
    }
,
    {
        to: '/lazy3',
        path: 'lazy3',
        name: 'Lazy-3',
        Component:lazy3
    }
    ,
    {
        to:"/shopping",
        path:"shopping",
        name:"Shopping",
        Component:lazy4
    }



]