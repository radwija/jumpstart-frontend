import './App.css';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {
  return (
    <>
      <Navbar />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
