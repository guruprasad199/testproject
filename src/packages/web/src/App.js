import './App.css'
import React, { Component } from 'react';
import WebRoutes from './WebRoutes';
import HomeScreen from '../../components/src/HomeScreen';
import 'antd/dist/antd.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

if (!HomeScreen.instance) {
  const defaultProps = {
    navigation: null,
    id: 'HomeScreen'
  };
  const homeScreen = new HomeScreen(defaultProps);
}
class App extends Component {
  render() {
    return (
      <>
        <WebRoutes />
      </>
    );
  }
}


export default App;



