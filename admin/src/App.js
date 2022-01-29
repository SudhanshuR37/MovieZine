import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='App'>
      <Topbar></Topbar>
      <div className='App__container'>
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
