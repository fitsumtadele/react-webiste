import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import './App.css';
import Menu from './pages/Menu.js';
import Howitworks from './pages/Howitworks.js';
import Services from'./pages/Services.js';
import  Testimonies from './pages/Testimonies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from'./components/navigation.js';

function App() {
  return (
    <div>
      
    <Router><Navigation/>
     
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/howit' element={<Howitworks/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/testimonies' element={<Testimonies/>}/>
        </Routes>
        </Router> 
        
          
        
      
     
      
      
         
     
     
    </div>
  );
}

export default App;
