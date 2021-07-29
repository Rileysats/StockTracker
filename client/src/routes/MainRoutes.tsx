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
    backgroundColor: "rgba(31, 73, 125, 0.2)"
  },
  container: {
    margin:"auto",
    height: "100vh",
    width: "65%",
    backgroundColor: "white",
    boxShadow: "12px 0 15px -4px rgba(31, 73, 125, 0.2), -12px 0 8px -4px rgba(31, 73, 125, 0.2)"
  }
}

class MainRoutes extends React.Component {
  render() {
  return (
    <div className="App" style={styles.background}>
      <NavBar/>
      <div style={styles.container}>
        <Route exact path="/" component={Homepage}/>
        <Route path="/watchlists" component={Watchlists}/>
        <Route path="/search/" component={Stock}/>
        <Route path="/portfolio" component={Portfolio}/>
      </div>
      <Footer/>
    </div>
  );
}}

export default MainRoutes;
