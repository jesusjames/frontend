import React, { useState } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand,
    NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import { CartButton } from '../../components';
import './NavMenu.css';

export const NavMenu = () => {

    // state
    const [isOpen, setIsOpen] = useState(false);

    // toggle navbar
    const toggle = () => {
        setIsOpen(prevOpen => !prevOpen);
    };

    return (
        <header>
            <Navbar className="bg-header navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/"><Logo /></NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse className="d-sm-inline-flex" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/products">Productos</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                    <CartButton/>
                </Container>
            </Navbar>
        </header>
    );
}

export default React.memo(NavMenu);

