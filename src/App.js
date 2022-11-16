import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Education from './components/education/education';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
