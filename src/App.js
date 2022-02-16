import './App.css';
import  Header  from './components/Header';
import Footer from './components/Footer';
import CheckoutBox from './components/CheckoutBox';
import  Home  from './components/Home';
import  About  from './components/About';
import  Contact  from './components/Contact';
import  Product  from './components/Product';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import CartDetails from './components/CartDetails';

function App() {
  return ( 
    <>
       <Router>
          <Header />
       <Switch>
        
         <Route exact path="/" component={Home} />
         <Route  exact  path="/products" component={Product} />
         <Route  exact  path="/products/:id" component={ProductDetail} />
         <Route   exact     path="/about" component={About} />
         <Route   exact     path="/cart" component={CartDetails} />
         <Route    exact  path="/contact" component={Contact} />
         <Route    exact  path="/checkout" component={CheckoutBox} />
       </Switch> 
       </Router>
    
  
    
   </> 
  );
}

export default App;
