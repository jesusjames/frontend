import React, { useState } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand,
    NavbarToggler, NavItem, NavLink, ButtonDropdown,
    Button, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';
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
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
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
                    <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                        <Button id="caret" color="primary">Carrito</Button>
                        <DropdownToggle split color="primary" />
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Container>
            </Navbar>
        </header>
    );
}

export default React.memo(NavMenu);
