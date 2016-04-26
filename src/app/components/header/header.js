import React from 'react';
import {Link} from 'react-router';
// import {connect} from 'react-redux';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>React starter kit !</h1>
        <Link to='/'>Home</Link>
        <Link to='/restaurants'>Restaurants</Link>
        <Link to='/about'>About</Link>
        {this.props.children}
      </div>
    );
  }
}
