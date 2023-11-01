import './App.css';
import {Navigate, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  return (
   <div className=''>
   <Header></Header>
   <Routes>
   <Route exact path="home" element={<Home />} />
   <Route exact path="/" element={< Navigate to="/home"  />}  />
   <Route exact path="/products" element={<Product />} />
   <Route exact path="/products/:id" element={<ProductDetail />} />
   <Route exact path="/cart" element={<Cart/>}/>
   <Route exact path="/checkout" element={<Checkout/>}/>
   <Route exact path="/about" element={<About />} />
   <Route exact path="/contact" element={<Contact />} >
   </Route>
   
   </Routes>
  
   <Footer></Footer>
   </div>

  );
}

export default App;
