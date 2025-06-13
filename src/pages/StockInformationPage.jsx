import React from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import LineChartCard from '../component/charts/LineChartCatd';

function StockInfoPage() {
  const stockSummary = {
    name: "NASDAQ",
    price: "NGN 30,000",
    change: "-4.7 (-8.9%)",
    time: " June 10, 2025, 7:44am"
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
    <div className="flex font-poppins">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="px-5 py-4  bg-gray-50 min-h-[calc(100vh-100px)]">
          <div className='bg-white px-4'>
            {/* Header */}
            <div className='flex w-[100%] justify-evenly bg-white pt-6 border-b'>
              <div className='w-[30%]'>
                <h2 className="text-3xl font-light">{stockSummary.name}</h2>
                <p className="font-medium pt-1">
                  {stockSummary.price} <span className="text-sm text-red-500 ">↓ {stockSummary.change}</span>
                </p>
                <div className='flex items-center mt-2'>
                  <p className='text-sm'>As at </p>
                  <p className="text-sm font-medium ml-1">{stockSummary.time}</p>
                </div>

              </div>

              {/* Metrics Grid */}


              <div className="flex flex-col w-[70%] text-sm ">
                <div className='flex justify-between pl-6 pb-5  border-l-[1px] border-gray-200'>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400'>PREV CLOSE: </div>
                    <p className='font-medium mt-1'>{metrics.prevClose}</p>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400'>OPEN: </div>
                    <p className='font-medium mt-1'>{metrics.open}</p>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400'>VOLUME: </div>
                    <p className='font-medium mt-1'>{metrics.volume}</p>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400'>VALUE: </div>
                    <p className='font-medium mt-1'>{metrics.value}</p>
                  </div>
                </div>
                <div className='flex justify-between pl-6 pt-2 pb-5 bg-[#f4f4f4]'>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400 mb-2'>DAY’S HIGH: </div>
                    <span className="text-green-500 mt-3">↑ {metrics.dayHigh}</span>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400 mb-2'>DAY’S LOW: </div>
                    <span className="text-red-500 mt-3">↓ {metrics.dayLow}</span>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400 mb-2'>52 WEEK HIGH: </div>
                    <span className="text-green-500 mt-3">↑ {metrics.weekHigh}</span>
                  </div>
                  <div className='w-[25%]'>
                    <div className='text-xs text-gray-400 mb-2'>52 WEEK LOW: </div>
                    <span className="text-red-500 mt-3">↓ {metrics.weekLow}</span>
                  </div>
                </div>
              </div>
            </div>
            <LineChartCard />

            {/* Trading Information */}
            <div className='flex gap-5'>
              <div className='w-[50%]'>
                <div className=" ">
                  <h3 className="text-lg font-semibold mb-2">Trading Information</h3>
                  <div className='w-20 h-1 rounded-lg mb-6 bg-[#444CE5]'></div>
                  <div className='flex justify-between bg-[#f7f6f9]'>
                    <div className='w-[50%]'>
                      <div className="">
                        <div className='p-3.5 border-b border-[#444CE5]'>Trading Name:</div>
                        <div className='p-3.5 border-b border-[#444CE5]'>Ticker Symbol:</div>
                        <div className='p-3.5 border-b border-[#444CE5]'>Sector:</div>
                        <div className='p-3.5 border-b border-[#444CE5]'>Market Classification:</div>
                        <div className='p-3.5 border-b border-[#444CE5]'>Market Cap(mil):</div>
                        <div className='p-3.5 border-b border-[#444CE5]'>Shares Outstanding(mil):</div>
                      </div>
                    </div>
                    <div className='w-[50%]'>
                      <div className='p-3.5 border-b font-semibold border-[#444CE5]'>{tradingInfo.name}</div>
                      <div className='p-3.5 border-b font-semibold border-[#444CE5]'>{tradingInfo.symbol}</div>
                      <div className='p-3.5 border-b font-semibold border-[#444CE5]'>{tradingInfo.sector}</div>
                      <div className='p-3.5 border-b font-semibold border-[#444CE5]'>{tradingInfo.classification}</div>
                      <div className='p-3.5 border-b font-semibold border-[#444CE5]'>{tradingInfo.marketCap}</div>
                      <div className='p-3.5 border-b  font-semibold border-[#444CE5]'> {tradingInfo.shares}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Trades Table */}
              <div className="  w-[50%]">
                <h3 className="text-lg font-semibold mb-2">Last 5 days Trades</h3>
                <div className='w-20 h-1 rounded-lg mb-6 bg-[#444CE5]'></div>
                <table className="w-full text-left text-sm bg-[#f7f6f9]">
                  <thead className="bg-blue-50 border-b border-[#444CE5">
                    <tr>
                      <th className="p-4">Date</th>
                      <th className="p-4">Price [NGN]</th>
                      <th className="p-4">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrades.map((trade, index) => (
                      <tr key={index} className="border-b border-[#444CE5]">
                        <td className="p-4">{trade.date}</td>
                        <td className="p-4">{trade.price}</td>
                        <td className="p-4">{trade.volume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StockInfoPage;
