import React from 'react';
import { Container, DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import './Menu.css';

class Menu extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Container>
                        <DropdownButton id="dropdown-basic-button" title="Brand">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Menu;