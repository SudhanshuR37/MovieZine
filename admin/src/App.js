import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from './pages/userList/UserList';

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className='App__container'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/users" element={<UserList></UserList>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
