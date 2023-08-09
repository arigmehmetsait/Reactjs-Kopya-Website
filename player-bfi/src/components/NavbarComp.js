import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logos/logo.svg'
import './navbarComp.css'
import { BiSearchAlt2 } from 'react-icons/bi';


function NavbarComp() {



    return (

        <div className='ac' >
            <div style={{ backgroundColor: 'black' }}>
                <a href='/' style={{ paddingLeft: 37 }}><img src={logo} alt='logo'></img></a>

                <Navbar expand="lg" className="bg-body-dark-tertiary" >
                    <Container fluid>
                        <Navbar.Brand >

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >



                                <div class="dropdown">

                                    <button

                                        class="btn dropdown-toggle  "
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"

                                    ><a className='ahref' href='/Rentals'>Rentals</a>
                                    </button>

                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton"  >
                                        <div style={{ display: 'flex', }}>
                                            <a class="dropdown-item bg-secondary text-light" href="/Rentals">New</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Populer</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Collections</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Genres</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">A-Z</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Coming Soon</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="dropdown">

                                    <button

                                        class="btn dropdown-toggle  "
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"

                                    ><a className='ahref' href='/Sub'>Subscription</a>
                                    </button>

                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton"  >
                                        <div style={{ display: 'flex', }}>
                                            <a class="dropdown-item bg-secondary text-light" href="/Rentals">Recently added</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Kermode introduces</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Popular</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Collections</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Genres</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">A-Z</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Coming Soon</a>
                                        </div>
                                    </div>


                                </div>

                                <div class="dropdown">

                                    <button

                                        class="btn dropdown-toggle  "
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"

                                    ><a className='ahref' href='/Free'>Free</a>
                                    </button>

                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton"  >
                                        <div style={{ display: 'flex', }}>
                                            <a class="dropdown-item bg-secondary text-light" href="/Rentals">New</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Populer</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Collections</a>
                                            <a class="dropdown-item bg-secondary text-light" href="#">Britain on Film Map</a>
                                        </div>
                                    </div>

                                </div>

                                <Nav.Link
                                    href="/Subex"
                                    style={{
                                        color: 'white',
                                        backgroundColor: 'black',

                                    }}
                                    className="nav-link-with-underline"
                                >
                                    Subscription Exclusives
                                </Nav.Link>
                            </Nav>



                            <Form className="d-flex">
                                <Nav
                                    className="me-auto my-2 my-lg-0 "
                                    style={{ maxHeight: '100px', color: 'white', backgroundColor: 'black' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action5" className="nav-link-with-underline" style={{ color: 'white', backgroundColor: 'black', paddingTop: 15 }}>Watchlist</Nav.Link>
                                    <Nav.Link href="/SignIn" className="nav-link-with-underline" style={{ color: 'white', backgroundColor: 'black', paddingTop: 15 }} >SignIn</Nav.Link>


                                    <nav class="navbar">
                                        <a class="navbar-brand"></a>
                                        <form class="form-inline">

                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <BiSearchAlt2 style={{ fontSize: 25 }} />
                                        </form>

                                    </nav>

                                </Nav>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >

        </div >
    );
}

export default NavbarComp;
