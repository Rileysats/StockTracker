import React from 'react';
import Graph from '../components/Graph';

class Stock extends React.Component {
  render() {
  return (
    <div>
      <Graph ticker="apt"/>
    </div>
  );
}}

export default Stock;
