import React, { useState, Component } from 'react';
// import logo from './logo.svg';

import {
  Jumbotron,
  Button,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import MenuComponent from './components/MenuComponent';

import './App.css';

import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this)

    this.state = {
      dishes: DISHES,
      // isOpen: false
    };

  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }



  render() {
   
      // const [isOpen, setIsOpen] = useState(false);
      // const toggle = () => setIsOpen(!isOpen);
      
     
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/purveshmakode24" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
        <Jumbotron className="center-jumbo">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>

        {/* My menu component  */}
        <MenuComponent dishes = {this.state.dishes}/>
      </div>
    );
  }

}

export default App;
