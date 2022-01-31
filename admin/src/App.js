import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className='App__container'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/users" element={<UserList></UserList>} />
          <Route path="/user/:userId" element={<User></User>} />
          <Route path="/newUser" element={<NewUser></NewUser>} />
          <Route path="/products" element={<ProductList></ProductList>} />
          <Route path="/product/:productId" element={<Product></Product>} />
          <Route path="/newProduct" element={<NewProduct></NewProduct>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
