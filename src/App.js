import './App.css';
import { Navbar, Footer } from './componets';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/redirect' element={<div>redirected page</div>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
