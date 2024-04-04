import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarLayout = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand to='/' as={Link}>Luminous</Navbar.Brand>
                    <Navbar.Toggle aria-controls="companyName" />
                    <Navbar.Collapse id="companyName">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to='/' as={Link}>Home</Nav.Link>
                            <Nav.Link to='/products' as={Link}>Products</Nav.Link>
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
                            <Nav.Link href="#" disabled>
                                Link2
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            <Nav.Link to='/cart' as={Link} className='border rounded p-2 mx-2'>Cart</Nav.Link>

                        </Form>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>

    );
};

export default NavbarLayout;