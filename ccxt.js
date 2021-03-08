"use strict";
const ccxt = require("ccxt");

(async function () {
  let kraken = new ccxt.kraken();
  let bitfinex = new ccxt.bitfinex({ verbose: true });
  let huobipro = new ccxt.huobipro();
  let coinbase = new ccxt.coinbase();

  const binance1 = new ccxt.binance({ enableRateLimit: true });

  // console.log (kraken.id,    await kraken.loadMarkets ())
  // console.log (bitfinex.id,  await bitfinex.loadMarkets  ())
  // console.log (huobipro.id,  await huobipro.loadMarkets ())
  const result = await Promise.all([
    binance1.fetchOHLCV("BTC/USDT", '1m'),
  ]);
  console.log(result);
  // console.log (kraken.id,    await kraken.fetchOrderBook (kraken.symbols[0]))
  // console.log (bitfinex.id,  await bitfinex.fetchTicker ('BTC/USD'))
  // console.log (huobipro.id,  await huobipro.fetchTrades ('ETH/USDT'))

  // console.log (kraken.id, await kraken.fetchBalance ())

  // // sell 1 BTC/USD for market price, sell a bitcoin for dollars immediately
  // console.log (kraken.id, await kraken.createMarketSellOrder ('BTC/USD', 1))

  // // buy 1 BTC/USD for $2500, you pay $2500 and receive ฿1 when the order is closed
  // console.log (kraken.id, await kraken.createLimitBuyOrder ('BTC/USD', 1, 2500.00))

  // // pass/redefine custom exchange-specific order params: type, amount, price or whatever
  // // use a custom order type
  // bitfinex.createLimitSellOrder ('BTC/USD', 1, 10, { 'type': 'trailing-stop' })
})();
