import MenuOption from "./MenuOption.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";


const Sidebar = ({ option }) => {

    const menuOptions = [
        "Wallets" ,"Profile", "Settings"
    ]

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TransactStat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <ul className='list-group'>
                                    {menuOptions.map((menuOption) =>
                                        <NavDropdown.Item href="#action/3.1">{menuOption}</NavDropdown.Item>
                                    )}
                                </ul>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar