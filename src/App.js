import './App.css';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgottenPassword from './pages/ForgottenPassword';
import ResetPassword from './pages/ResetPassword';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';


function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}

export default App;
