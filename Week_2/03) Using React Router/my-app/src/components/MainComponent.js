//--> This is a Container Component: Which has local state

import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <div className="container">
          <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        <Footer />
      </div>
    );
  }

}

export default MainComponent;
