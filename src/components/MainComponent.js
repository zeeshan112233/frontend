import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      //   selectedDish: null,
    };
  }

  //   onDishSelect(dish) {
  //     this.setState({ selectedDish: dish });
  //     console.log(dish);
  //   }

  render() {
    // const HomePage = () => {
    //     return(
    //         <Home
    //         />
    //     );
    //   }
    return (
      <div>
        <Header />

        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dish) => this.onDishSelect(dish)}
        />
        {/* <DishDetail
          selectedDish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}

        <Switch>
          <Route path='/home' component={Home} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to='/home' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
