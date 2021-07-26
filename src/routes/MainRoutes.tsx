import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import NavBar from '../components/NavBar';
import Watchlists from '../pages/Watchlists';
import Stock from '../pages/Stock';
import Portfolio from '../pages/Portfolio';
import Footer from '../components/Footer';

const styles = {
  background: {
    height: "100vh",
    // backgroundColor: "#F7F7F7"
    backgroundColor: "red"
  }
}

class MainRoutes extends React.Component {
  render() {
  return (
    <div className="App" style={styles.background}>
      <NavBar/>
      <Route path="/" component={Homepage}/>
      <Route path="/watchlists" component={Watchlists}/>
      <Route path="/search/" component={Stock}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Footer/>
    </div>
  );
}}

export default MainRoutes;
