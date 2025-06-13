import React from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

function StockInfoPage() {
  const stockSummary = {
    name: "NASDAQ",
    price: "NGN 30,000",
    change: "-4.7 (-8.9%)",
    time: "As at June 10, 2025, 7:44am"
  };

  const metrics = {
    prevClose: 6,
    open: 6,
    volume: "1,513,331.00",
    value: "8,499,660.68",
    dayHigh: 4.5,
    dayLow: 7.8,
    weekHigh: 3.8,
    weekLow: 5.0
  };

  const tradingInfo = {
    name: "NASDAQ",
    symbol: "NASDAQ",
    sector: "Financial services",
    classification: "Mainboard",
    marketCap: "123,456,789.00",
    shares: "335,879,456.00"
  };

  const recentTrades = [
    { date: "Jun-10-2025", price: "NGN 123,456,789.00", volume: "123,456,789.00" },
    { date: "Jun-08-2025", price: "NGN 100,986.00", volume: "101,986.00" },
    { date: "Jun-07-2025", price: "NGN 426,980.00", volume: "426,980.00" },
    { date: "Jun-06-2025", price: "NGN 123,456,789.00", volume: "123,456,789.00" },
    { date: "Jun-05-2025", price: "NGN 335,879,456.00", volume: "345,980.90" }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-8 bg-gray-50 min-h-[calc(100vh-100px)]">
          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold">{stockSummary.name}</h2>
            <p className="text-red-500 font-medium">
              {stockSummary.price} <span className="text-sm">↓ {stockSummary.change}</span>
            </p>
            <p className="text-sm text-gray-500">{stockSummary.time}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>PREV CLOSE: <strong>{metrics.prevClose}</strong></div>
            <div>OPEN: <strong>{metrics.open}</strong></div>
            <div>VOLUME: <strong>{metrics.volume}</strong></div>
            <div>VALUE: <strong>{metrics.value}</strong></div>
            <div>DAY’S HIGH: <span className="text-green-500">↑ {metrics.dayHigh}</span></div>
            <div>DAY’S LOW: <span className="text-red-500">↓ {metrics.dayLow}</span></div>
            <div>52 WEEK HIGH: <span className="text-green-500">↑ {metrics.weekHigh}</span></div>
            <div>52 WEEK LOW: <span className="text-red-500">↓ {metrics.weekLow}</span></div>
          </div>

          {/* Trading Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Trading Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div><strong>Name:</strong> {tradingInfo.name}</div>
              <div><strong>Symbol:</strong> {tradingInfo.symbol}</div>
              <div><strong>Sector:</strong> {tradingInfo.sector}</div>
              <div><strong>Classification:</strong> {tradingInfo.classification}</div>
              <div><strong>Market Cap:</strong> {tradingInfo.marketCap}</div>
              <div><strong>Shares Outstanding:</strong> {tradingInfo.shares}</div>
            </div>
          </div>

          {/* Recent Trades Table */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-2">Date</th>
                  <th className="p-2">Price [NGN]</th>
                  <th className="p-2">Volume</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{trade.date}</td>
                    <td className="p-2">{trade.price}</td>
                    <td className="p-2">{trade.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StockInfoPage;
