import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from "react-bootstrap";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar className="navbar">
                <Container>
                    <Link to="/">
                        <Navbar.Brand className="brandLogo">Phone Shop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="btn btn-dark" style={{color: "#FFF"}}>
                            <Link to="/admin" className="btn-admin">Admin</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default Header;