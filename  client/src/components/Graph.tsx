import React from 'react';
import { getStock } from '../api/getStock';
class Graph extends React.Component {

  onSearch = (ticker:string) => {
    var a = getStock(ticker);
  }
  render() {
  return (
    <div>
<button onClick={()=>this.onSearch("Asd")}></button>
    </div>
  );
}}

export default Graph;
