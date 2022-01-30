import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
