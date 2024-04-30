import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavbarLayout = () => {

    const cartAmount = useSelector(state => state.cart);

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container fluid>
                    <Navbar.Brand to='/' className='fst-italic fw-bolder' as={Link}>Luminous</Navbar.Brand>
                    <Navbar.Toggle aria-controls="companyName" />
                    <Navbar.Collapse id="companyName">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* Home page link */}
                            <Nav.Link to='/' as={Link}>Home</Nav.Link>

                            {/* Accessories page link */}
                            <Nav.Link to='/products' as={Link}>Accessories</Nav.Link>

                            {/* plants page link */}
                            <Nav.Link to='/plants' as={Link}>Plants</Nav.Link>

                            {/* Dropdown menu */}
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        {/* Search bar , cart */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            <Nav.Link to='/cart' as={Link} className='border rounded p-2 mx-2 '>Cart<sup>{cartAmount.length}</sup></Nav.Link>

                        </Form>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>

    );
};

export default NavbarLayout;