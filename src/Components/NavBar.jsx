import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavbarPanel = () => {
  const cartProducts = useSelector(state => state.cart)
  return (
    <div >  
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
            <Nav.Link to='/' as={Link}>Products</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <div style={{paddingLeft:'50px'}}><span style={{color:'red'}}>{cartProducts.length}</span></div>
            <Nav.Link to='/cart' as={Link} > My Cart </Nav.Link>  
            </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default NavbarPanel
