import './App.css';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgottenPassword from './pages/ForgottenPassword';
import ResetPassword from './pages/ResetPassword';


function App() {
  return (
    <>
      <Navbar />
      <ResetPassword />
      <Footer />
    </>
  );
}

export default App;
