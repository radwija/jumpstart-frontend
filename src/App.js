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
          <Route path='/user/*' element={<Profile />} />
          <Route path='/my-cart' element={<MyCart />} />

          {/* Admin Routes */}
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/orders' element={<Dashboard />} />
          <Route path='/admin/users' element={<UserManagement />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
