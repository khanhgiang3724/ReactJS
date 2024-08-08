import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import Client from './pages/Website/Client';
import Home from './pages/Website/Home';
import LayoutAdmin from './pages/Admin/layoutAdmin';
import ListProduct from './pages/Admin/pageAdmin/ListProduct';
import AddProduct from './pages/Admin/pageAdmin/AddProduct';
import EditProduct from './pages/Admin/pageAdmin/EditProduct';
import ListCategory from './pages/Admin/categoryAdmin/ListCategory';
import AddCategory from './pages/Admin/categoryAdmin/AddCategory';
import EditCategory from './pages/Admin/categoryAdmin/EditCategory';

function App() {
  const route = useRoutes([
    {path:'',element:<Client/>,children:[
      {path:'',element:<Home/>},
      // {path:'detail',element:<Detail/>}
  ]},
  {path:'admin',element: <LayoutAdmin/>,children:[
    {path:'list',element:<ListProduct/>},
    {path:'add',element:<AddProduct/>},
    {path:'edit/:id',element:<EditProduct/>},
    {path:'listCategory',element:<ListCategory/>},
    {path:'addCategory',element:<AddCategory/>},
    {path:'editCategory/:id',element:<EditCategory/>},
  ]},
  ])
  return route
      
}

export default App
