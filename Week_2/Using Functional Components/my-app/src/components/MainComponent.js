//--> This is a Container Component: Which has local state

import React, { useState, Component } from 'react';
import {
  Jumbotron,
  Button,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    });
}

  render() {
     
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
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
        <div className="container">
        <MenuComponent dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id ===this.state.selectedDish)[0]} />
        </div>
      </div>
    );
  }

}

export default MainComponent;
  