import React from 'react'
import {Container, Navbar,Nav } from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {signout} from '../../action/auth.actions'

export default function Header() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout())
    }

    const NonLoggedInLinks = () =>{
        return(
            <Nav>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link"> Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </li>
            </Nav>
        )
    }

    const loggedInLinks = () => {
        return(
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}> Logout</span>
                </li>
            </Nav>
        )
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid> 
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <               NavDropdown.Item href="#action/3.1">Action</>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                           {auth.authenticate  ? loggedInLinks() : NonLoggedInLinks()}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
