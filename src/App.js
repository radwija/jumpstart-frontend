import './App.css';
import { Route, Routes } from "react-router";
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgottenPassword from './pages/ForgottenPassword';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { Profile } from './pages/user/Profile';
import { MyCart } from './pages/user/MyCart';
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import OrderManagement from './pages/admin/OrderManagement';
import Inventory from './pages/admin/Inventory';
import UpdateProfile from './pages/user/UpdateProfile';
import MyOrders from './pages/user/MyOrders';
import AddProduct from './pages/admin/AddProduct';
import CreateCategory from './pages/admin/CreateCategory';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<ProductDetail />} />
          <Route path='/find-account' element={<ForgottenPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          {/* User Routes */}
          <Route path='/user' element={<Profile />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/profile/update' element={<UpdateProfile />} />
          <Route path='/user/orders' element={<MyOrders />} />
          <Route path='/my-cart' element={<MyCart />} />

          {/* Admin Routes */}
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/orders' element={<OrderManagement />} />
          <Route path='/admin/inventory' element={<Inventory />} />
          <Route path='/admin/users' element={<UserManagement />} />
          <Route path='/admin/add-product' element={<AddProduct />} />
          <Route path='/admin/create-category' element={<CreateCategory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
