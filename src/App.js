import { Routes, Link, Route } from 'react-router-dom';
import Blog from './component/Blog/Blog';
import Gallery from './component/Gallery/Gallery';
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/cartPage/CartPage";
import Services from './component/AboutUs/Services';
import Home from './component/Home/Home';
import Contact from "./component/Contact/Contact"
import { product } from "./assets/fakeData/productData";
import { cart } from "./assets/fakeData/cartData";
import LoginForm from './routes/LoginForm';
import Register from './routes/Register';
import { account } from './assets/fakeData/account';
import PaymentModal from './component/checkout/Checkout';
function App() {
  localStorage.setItem('products', JSON.stringify(product));
  localStorage.setItem('carts', JSON.stringify(cart));
  localStorage.setItem('accounts', JSON.stringify(account));
  
  return (
    
      <div className="head">
        <div className='App'>
          
        </div>
        <Routes>
        <Route path='/payment' element={<PaymentModal/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/aboutUs' element={<Services/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/productdetail" element={<ProductDetailPage/>}/>
          <Route  path="/cart" element={<CartPage/>}/>
          <Route  path="/loginform" element={<LoginForm/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes> 
    </div>
  );
}

export default App;
