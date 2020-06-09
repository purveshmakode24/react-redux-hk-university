import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Navbar,
    NavbarBrand,
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant</NavbarBrand>
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