import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem
} from 'reactstrap';

const Header = () => {


    return (
        <div>
            <Navbar style={{ backgroundColor: "#3c415c", paddingTop: "20px" }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <p>Vocab Shuffler</p>
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/Home" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/Start Learning" className="NavLink">Random Vocab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/Input Vocab" className="NavLink">Input Vocab</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;