 
import { lazy, LazyExoticComponent } from 'react';



 type JSXElement = () => JSX.Element;


 interface routes {
    to: string;
    path: string;
    name: string;
    Component : LazyExoticComponent<JSXElement> |JSXElement;
 }


 const lazyLayout=lazy(()=>import('../01-lazyload/layout/LazyLayout'));
import { NoLazy } from '../01-lazyload/pages/NoLazy';

export const routes:routes[] = [
    {
        to: '/lazy/',
        path: '/lazy/*',
        name: 'Lazy-Layout',
        Component:lazyLayout
    },
    {
        to: '/noLazy',
        path: 'noLazy',
        name: 'noLazy',
        Component:NoLazy
    }
,
   


]