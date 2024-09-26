import './app.css'
import Navbar from '../src/components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return(
    <>
    <Navbar />
    <Outlet />
    </>
  );
}

export default App;