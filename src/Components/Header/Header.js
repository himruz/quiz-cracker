import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" sticky="top"  className='shadow-lg'>
      <Container fluid>
      <Navbar.Brand href="#">TALENT-HUNT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'>Topics</Link>
            <Link to='/statics'>Statics</Link>
            <Link to='/blog'>Blogs</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;