import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './Header';
import About from './About';
import toast, { ToastContainer, ToastProvider } from 'react-hot-toast';

function App() {
  return (
  <div>
    <Header/>
    <About/>
  </div>
 
  );
}

export default App;
