import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Menu from '../pages/Menu.js';
import Howitworks from '../pages/Howitworks.js';
import Services from'../pages/Services.js';
import  Testimonies from '../pages/Testimonies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
function Navigation()
{
    return(
        
        <div>
        <header>
                 <Router> 
    <Navbar collapseOnSelect expand="lg" className="text-light " bg="dark" variant="dark"  >
        <Container>
        <Navbar.Brand to="/" as={Link} >Bus Ticket system</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" font-weight-bolder justify-content-center w-100" style={{fontWeight: "bold"}}>
            <Nav.Link  to="/" as={Link} >Menu</Nav.Link>
            <Nav.Link  to="/howit" as={Link} >How it works</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/services" as={Link} >Services</Nav.Link>
            <Nav.Link to="/testimonies"  as={Link} >Testimonies</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
</Navbar>
            
                <Routes>
              <Route path='/' element={<Menu/>}/>
              <Route path='/howit' element={<Howitworks/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/testimonies' element={<Testimonies/>}/>
            </Routes>
            
            </Router> 
            </header>
              
        </div>    
        

    );
}
export default Navigation;