import './App.css';
import './Styles/style.css'
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Quotation from './components/Quotation'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path='/login' element={ <Login /> } />
        <Route exact path='/register' element={ <Register /> } />
        <Route exact path='/cart' element={ <Cart /> } />
        <Route exact path='/quotation' element={ <Quotation /> } />
        <Route exact path='/about' element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
