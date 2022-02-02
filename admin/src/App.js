import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';
import { useContext } from 'react';
import ListList from './pages/listList/ListList';
import List from './pages/list/List';
import NewList from './pages/newList/NewList';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login></Login>} />
      </Routes>
      {user &&
        <>
          <Topbar></Topbar>
          <div className='App__container'>
            <Sidebar></Sidebar>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/users" element={<UserList></UserList>} />
              <Route path="/user/:userId" element={<User></User>} />
              <Route path="/newUser" element={<NewUser></NewUser>} />
              <Route path="/movies" element={<ProductList></ProductList>} />
              <Route path="/product/:productId" element={<Product></Product>} />
              <Route path="/newProduct" element={<NewProduct></NewProduct>} />
              <Route path="/lists" element={<ListList></ListList>} />
              <Route path="/list/:listId" element={<List></List>} />
              <Route path="/newList" element={<NewList></NewList>} />
            </Routes>
          </div>
        </>
      }
    </Router>
  );
}

export default App;
