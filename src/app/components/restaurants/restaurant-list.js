import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addRestaurant} from '../../actions/action-creator';
import Restaurants from './restaurants';
import AddRestaurant from './add-restaurant';

function mapStateToProps(state) {
  return {
    restaurant: state.restaurant
  };
}

function mapDispatchToProps(dispatch) {
  // return {actions: bindActionCreators(actionCreators, dispatch)};
  return {
    addRestaurant: (name) => {
      dispatch(addRestaurant(name));
    }
  };
}

class RestaurantList extends React.Component {
  render() {
    const restaurants = this.props.restaurant;

    return (
      <div>
        <AddRestaurant />
        <hr />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
