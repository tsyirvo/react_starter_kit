import React from 'react';
import {Link} from 'react-router';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
