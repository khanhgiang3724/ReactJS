
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
import Shop from './pages/Website/Shop';
import Login from './pages/Website/auth/Login';
import Register from './pages/Website/auth/Register';
import ProductDetail from './pages/Website/ProductDetail';
import CategoryId from './pages/Website/CategoryId';
import Search from './pages/Website/Search';
import Cart from './pages/Website/Cart';

function App() {
  const route = useRoutes([
    {path:'',element:<Client/>,children:[
      {path:'',element:<Home/>},
      {path:'shop',element:<Shop/>},
      {path:'detail/:id',element:<ProductDetail/>},
      {path:'category/:id',element:<CategoryId/>},
      {path:'search',element:<Search/>},
      {path:'cart',element:<Cart/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>}
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
