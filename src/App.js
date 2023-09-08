import './App.css';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

export default App;
