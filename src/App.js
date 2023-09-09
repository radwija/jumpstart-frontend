import './App.css';
import { Route, Routes } from "react-router";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgottenPassword from './pages/ForgottenPassword';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<ProductDetail />} />
          <Route path='/find-account' element={<ForgottenPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
