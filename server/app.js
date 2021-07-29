const express = require('express')
const request = require('request');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/getChart", (req, res) => {


const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
  qs: {interval: '5m', symbol: 'APT.AX', range: '1d', region: 'AU'},
  headers: {
    'x-rapidapi-key': '95d1ce4279mshb7fb910052edcaap1f1178jsnf161c2b230c0',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
  else {
    var parsedBody = JSON.parse(body);
	  // console.log(body);
    var timestamp = parsedBody['chart']['result'][0]['timestamp'];
    var meta = parsedBody['chart']['result'][0]['meta'];
    var open = parsedBody['chart']['result'][0]['indicators']['quote'][0]['open'];

    var currency = meta['currency'];
    var exchange = meta['exchangeName'];
    var symbol = meta['symbol'];
    var regularMarketPrice = meta['regularMarketPrice'];
    res.send({timestamp , open, currency, exchange, symbol,regularMarketPrice});
  }
});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})