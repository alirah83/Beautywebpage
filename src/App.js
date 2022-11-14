import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Features from './components/Features';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Header />
       <Menu />
       <Features />
       <Service />
       <Testimonial />
       <Footer />
      </React.Fragment>
    );
  }
}

export default App;
