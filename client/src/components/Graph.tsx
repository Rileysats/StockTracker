import React from 'react';
import axios from 'axios';

interface Props {
  ticker: string
}

class Graph extends React.Component<Props> {
 public state = {
    open: {},
    timestamp: {},
    currency: "",
    exchange: "",
    symbol: "",
    regularMarketPrice: ""
  }


  public componentDidMount = () => {
     axios.get("/getChart"+this.props.ticker).then(response => {
      //  console.log(response.data.symbol)
      this.setState({

      });
      
     });
  }
 
  render() {
  return (
    <div>
      {}
    </div>
  );
}}

export default Graph;
