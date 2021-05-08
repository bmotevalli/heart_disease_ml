import React, { Component } from "react";
import * as ST from "../settings/settings";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import classes from "./MainView.module.css";
import InputComp from "../components/Input/InputComp"

class MainView extends Component {

  state = {
    lstInputs: [
      "Chlostrol",
      "Blood Pressure"
    ]
  }

  render() {
    let Style = {
      marginLeft: ST.SIDE_MENU.CLOSED,
    };
    if (this.props.isExpanded) {
      Style["marginLeft"] = ST.SIDE_MENU.OPENED;
    }

    const MainRoutes = Object.keys(ST.ROUTES.MAINVIEW).map(routeName => {
      return (
        <Route
          key={routeName}
          path={ST.ROUTES.MAINVIEW[routeName].PATH}
          component={ST.ROUTES.MAINVIEW[routeName].COMP}
          exact
        />
      );
    });

    return (
      <div className="container">
        <Switch>{MainRoutes}</Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExpanded: state.isSideMenuExpanded,
  };
};

export default connect(mapStateToProps)(MainView);
