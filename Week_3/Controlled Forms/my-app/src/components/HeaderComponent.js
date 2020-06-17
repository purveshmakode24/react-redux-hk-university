import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);  // for without binding, just make toggleNav arrow function
    }                                                //// As In class components, the 'this' keyword is not defined by default, so with regular functions the 'this' keyword represents the object that called the method, which can be the global window object

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Restaurant" />
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" > 
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
                <Jumbotron className="center-jumbo">
                    <div className="container">
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">We take inspiration from the world best cuisines, and create a unique fusion experience. Our lipsmaking creations will tickle your culinary senses!</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;