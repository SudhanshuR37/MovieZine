import './App.scss';
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home></Home> : <Navigate to="/register" />} />
        <Route path="/movies" element={user ? <Home type={"movies"}></Home> : <Navigate to="/login" />} />
        <Route path="/series" element={user ? <Home type={"series"}></Home> : <Navigate to="/login" />} />
        <Route path="/watch" element={user ? <Watch></Watch> : <Navigate to="/login" />} />
        <Route path="/register" element={!user ? <Register></Register> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login></Login> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
