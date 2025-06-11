import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import microsoft from '../Assests/microsoft 5.svg';
import { Star } from 'lucide-react';

const initialStocks = [
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-green-600',
    isFavorite: false,
    },
    {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-red-600',
    isFavorite: false,
  },
   {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-green-600',
    isFavorite: false,
    },
    {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-red-600',
        isFavorite: false,
    
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corp',
        change: '+4.50%',
        price: 'NGN 45,000',
        marketCap: 'NGN 12,000',
        changeColor: 'text-red-600',
        isFavorite: false,
    },
     {
        symbol: 'MSFT',
        name: 'Microsoft Corp',
        change: '+4.50%',
        price: 'NGN 45,000',
        marketCap: 'NGN 12,000',
        changeColor: 'text-red-600',
        isFavorite: false,
    },
       {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-red-600',
    isFavorite: false,
  },
   {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-green-600',
    isFavorite: false,
    },
     {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-red-600',
    isFavorite: false,
  },
   {
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    change: '+4.50%',
    price: 'NGN 45,000',
    marketCap: 'NGN 12,000',
    changeColor: 'text-green-600',
    isFavorite: false,
    },

];

const MarketPage = () => {
  const [stocks, setStocks] = useState(initialStocks);

  const toggleFavorite = (index) => {
    const updatedStocks = [...stocks];
    updatedStocks[index].isFavorite = !updatedStocks[index].isFavorite;
    setStocks(updatedStocks);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-50 px-8 pt-4">
          <div className="pt-4 p-6 bg-white">
            
            <div className="flex space-x-4 mb-4">
              <button className="text-blue-600 text-lg font-semibold pb-2">Nasdaq</button>
              <button className="text-gray-500 text-lg pb-2">NGX</button>
              <button className="text-gray-500 text-lg pb-2">Dow Jones</button>
            </div>

           
            <div className="flex space-x-3 mb-6 flex-wrap">
              {['Trending stocks', 'Most active', 'Top gainers', 'Top losers'].map((item) => (
                <button
                  key={item}
                  className="px-4 py-1 bg-white text-gray-700 rounded-md border font-medium border-gray-300 text-sm hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-6 font-semibold text-gray-600 pb-2 mb-2">
              <div className="col-span-2">Name</div>
              <div>Change (%)</div>
              <div>Price ↓</div>
              <div>Market cap</div>
              <div></div>
            </div>

          
            {stocks.map((stock, index) => (
              <div
                key={index}
                className="grid grid-cols-6 items-center py-3 border-b border-gray-100 hover:bg-gray-50"
              >
                <div className="col-span-2 flex items-center space-x-3">
                  <button onClick={() => toggleFavorite(index)}>
                    <Star
                      className={`h-5 w-5 ${
                        stock.isFavorite ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={stock.isFavorite ? 'currentColor' : 'none'}
                    />
                  </button>
                  <img src={microsoft} alt="MSFT" className="w-6 h-6" />
                  <div className="flex flex-row gap-7">
                    <div className="font-medium">{stock.symbol}</div>
                    <div className="text-base text-gray-500">{stock.name}</div>
                  </div>
                </div>
                <div className={`font-semibold ${stock.changeColor}`}>{stock.change}</div>
                <div className="text-black font-medium">{stock.price}</div>
                <div className="text-black font-medium">{stock.marketCap}</div>
                <div>
                  <button className="bg-black text-white px-6 py-1.5 rounded-md hover:opacity-90">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketPage;
