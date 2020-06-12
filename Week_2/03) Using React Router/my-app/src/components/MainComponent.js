//--> This is a Container Component: Which has local state

import React, { Component } from 'react';
import Home from './HomeComponent';
import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // selectedDish: null,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId
  //   });
  // }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <div className="container">

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><MenuComponent dishes={this.state.dishes} />} />
            <Redirect to="/home" />
          </Switch>

          {/* <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
          {/* <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        </div>
        <Footer />
      </div>
    );
  }

}

export default MainComponent;
