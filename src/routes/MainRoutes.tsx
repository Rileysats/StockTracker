import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import NavBar from '../components/NavBar';
import Watchlists from '../pages/Watchlists';
import Stock from '../pages/Stock';
import Portfolio from '../pages/Portfolio';

class MainRoutes extends React.Component {
  render() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" component={Homepage}/>
        <Route path="/watchlists" component={Watchlists}/>
        <Route path="/search/" component={Stock}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </div>
  );
}}

export default MainRoutes;
