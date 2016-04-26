import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addRestaurant} from '../../actions/action-creator';

export default class AddRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextState: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }
  render() {
    return (
      <div>
        <h3>Add a restaurant</h3>
        <form>
          <label for='name'>Name :</label><br />
          <input type='text'
            autofocus
            name='name'
            ref='restaurantName'
            onChange={this.handleChange}
          />
          <br />
          <input type='submit' value='Save' onClick={this.saveChange}/>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.state.nextState[e.target.name] = e.target.value;
  }

  saveChange(e) {
    e.preventDefault();
    // console.log(addRestaurant(this.state.nextState.name));
    if (ReactDOM.findDOMNode(this.refs.restaurantName).value !== '') {
      this.props.dispatch(addRestaurant(this.state.nextState.name));
    }
    ReactDOM.findDOMNode(this.refs.restaurantName).value = '';
  }
}

export default connect()(AddRestaurant);
