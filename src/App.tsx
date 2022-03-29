import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import ScrollButton from "./components/ScrollButton/ScrollButton";

//pages
import Home from './pages/Home';
import Signatures from './pages/Signatures';
import Snacks from './pages/Snacks';
import Dallemomos from './pages/Dallemomos';
import Frozenitems from './pages/Frozenitems';
import Momo from './pages/Momo';
import Signature from './pages/Signature';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/> 
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signatures" element={<Signatures/>} />
      <Route path="/snacks" element={<Snacks/>} />
      <Route path="/dallemomos" element={<Dallemomos/>} />
      <Route path="/frozenitems" element={<Frozenitems/>} />
      <Route path="/momo" element={<Momo/>} />
      <Route path="/signature" element={<Signature/>} />
      </Routes> 
      <Footer/>
      </Router>
      <ScrollButton/>
    </div>
  );
}

export default App;