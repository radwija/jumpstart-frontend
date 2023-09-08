import './App.css';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
