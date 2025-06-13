// src/pages/PortfolioPage.js
import React, { useRef, useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import MyStockCard from '../component/MyStockCard';
import MetaLogo from "../Assests/icons/meta.svg";
import TeslaLogo from "../Assests/icons/tesla-motors-1 1.svg";
import ArrowRight from "../Assests/icons/arrowright.svg";
import ArrowDown from "../Assests/icons/arrow-right2.svg";
import ArrowDownUp from "../Assests/icons/frame.svg";
import NasdaqLogo from "../Assests/icons/Ellipse 13.svg";

const mockStocks = [
    {
        logo: NasdaqLogo,
        name: "NASDAQ",
        symbol: "NSDQ",
        price: "NGN 32,000.00",
        change24h: "+0.37%",
        change7d: "-0.08%",
    },
    {
        logo: TeslaLogo,
        name: "Tesla",
        symbol: "TSLA",
        price: "NGN 32,000.00",
        change24h: "+0.37%",
        change7d: "-0.08%",
    },
    {
        logo: MetaLogo,
        name: "Meta",
        symbol: "META",
        price: "NGN 25,000.00",
        change24h: "+0.52%",
        change7d: "-0.10%",
    },
];


export default function PortfolioPage() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrolledToStart, setIsScrolledToStart] = useState(true);
    const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

    const stocks = [
        {
            name: "Meta",
            logo: MetaLogo,
            symbol: "META",
            price: "30,000",
            chartData:
                [
                    { name: "1", value: 45 },
                    { name: "2", value: 50 },
                    { name: "3", value: 47 },
                    { name: "4", value: 60 },
                    { name: "5", value: 58 },
                    { name: "6", value: 63 },
                    { name: "7", value: 70 },
                ],
        },


        {
            name: "Tesla Inc.",
            logo: TeslaLogo,
            symbol: "TSLA",
            price: '23,145',
            chartData:
                [
                    { name: "1", value: 70 },
                    { name: "2", value: 65 },
                    { name: "3", value: 60 },
                    { name: "4", value: 63 },
                    { name: "5", value: 58 },
                    { name: "6", value: 54 },
                    { name: "7", value: 65 },
                    { name: "7", value: 34 },
                    { name: "7", value: 22 },
                    { name: "7", value: 30 },
                    { name: "7", value: 49 },
                    { name: "7", value: 35 },
                    { name: "7", value: 25 },
                    { name: "7", value: 70 },
                    { name: "7", value: 45 },
                    { name: "7", value: 50 },
                    { name: "7", value: 15 },
                    { name: "7", value: 27 },
                    { name: "7", value: 65 },
                    { name: "7", value: 40 },
                ],
        },
        {
            name: "Tesla Inc.",
            logo: TeslaLogo,
            symbol: "TSLA",
            price: 23145,
            chartData:
                [
                    { name: "1", value: 70 },
                    { name: "2", value: 65 },
                    { name: "3", value: 60 },
                    { name: "4", value: 63 },
                    { name: "5", value: 58 },
                    { name: "6", value: 54 },
                    { name: "7", value: 65 },
                    { name: "7", value: 34 },
                    { name: "7", value: 22 },
                    { name: "7", value: 30 },
                    { name: "7", value: 49 },
                    { name: "7", value: 35 },
                    { name: "7", value: 25 },
                    { name: "7", value: 70 },
                    { name: "7", value: 45 },
                    { name: "7", value: 50 },
                    { name: "7", value: 15 },
                    { name: "7", value: 27 },
                    { name: "7", value: 65 },
                    { name: "7", value: 40 },
                ],
        },
        {
            name: "Tesla Inc.",
            logo: TeslaLogo,
            symbol: "TSLA",
            price: 23145,
            chartData:
                [
                    { name: "1", value: 70 },
                    { name: "2", value: 65 },
                    { name: "3", value: 60 },
                    { name: "4", value: 63 },
                    { name: "5", value: 58 },
                    { name: "6", value: 54 },
                    { name: "7", value: 65 },
                    { name: "7", value: 34 },
                    { name: "7", value: 22 },
                    { name: "7", value: 30 },
                    { name: "7", value: 49 },
                    { name: "7", value: 35 },
                    { name: "7", value: 25 },
                    { name: "7", value: 70 },
                    { name: "7", value: 45 },
                    { name: "7", value: 50 },
                    { name: "7", value: 15 },
                    { name: "7", value: 27 },
                    { name: "7", value: 65 },
                    { name: "7", value: 40 },
                ],
        },
        {
            name: "Tesla Inc.",
            logo: TeslaLogo,
            symbol: "TSLA",
            price: 23145,
            chartData:
                [
                    { name: "1", value: 70 },
                    { name: "2", value: 65 },
                    { name: "3", value: 60 },
                    { name: "4", value: 63 },
                    { name: "5", value: 58 },
                    { name: "6", value: 54 },
                    { name: "7", value: 65 },
                    { name: "7", value: 34 },
                    { name: "7", value: 22 },
                    { name: "7", value: 30 },
                    { name: "7", value: 49 },
                    { name: "7", value: 35 },
                    { name: "7", value: 25 },
                    { name: "7", value: 70 },
                    { name: "7", value: 45 },
                    { name: "7", value: 50 },
                    { name: "7", value: 15 },
                    { name: "7", value: 27 },
                    { name: "7", value: 65 },
                    { name: "7", value: 40 },
                ],
        },
        {
            name: "Tesla Inc.",
            logo: TeslaLogo,
            symbol: "TSLA",
            price: 23145,
            chartData:
                [
                    { name: "1", value: 70 },
                    { name: "2", value: 65 },
                    { name: "3", value: 60 },
                    { name: "4", value: 63 },
                    { name: "5", value: 58 },
                    { name: "6", value: 54 },
                    { name: "7", value: 65 },
                    { name: "7", value: 34 },
                    { name: "7", value: 22 },
                    { name: "7", value: 30 },
                    { name: "7", value: 49 },
                    { name: "7", value: 35 },
                    { name: "7", value: 25 },
                    { name: "7", value: 70 },
                    { name: "7", value: 45 },
                    { name: "7", value: 50 },
                    { name: "7", value: 15 },
                    { name: "7", value: 27 },
                    { name: "7", value: 65 },
                    { name: "7", value: 40 },
                ],
        },
    ];


    const bgColors = ["bg-[#A6F7E2]", "bg-[#B79BFF]", "bg-[#FFE5A5]", "bg-[#C7FFA5]", "bg-[#F8A5FF]"];

    const mockPNL = {
        logo: TeslaLogo,
        company: "Tesla Inc.",
        isVerified: true,
        totalValue: "77,000.00",
        change24h: "↑ +9.02%",
        change24hType: "up",
        profit: {
            amount: "NGN 16,300",
            change: "-6.36%",
            type: "up"
        },
        loss: {
            amount: "NGN 3,500",
            change: "-2.19%",
            type: "down"
        },
        chartData: [
            { value: 100 },
            { value: 110 },
            { value: 90 },
            { value: 120 }
        ],
        totalAssets: {
            value: "NGN 136,650",
            change: "-2.16%",
            type: "down"
        }
    };


    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setIsScrolledToStart(el.scrollLeft <= 1);
        setIsScrolledToEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    const updateScrollButtons = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };


    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        updateScrollButtons();
        el.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);

        return () => {
            el.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredStocks = mockStocks.filter(
        (stock) =>
            stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-50 font-poppins">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />

                <main className=" overflow-auto bg-gray-50 px-8 pt-4">

                    <h1 className="text-sm pb-4 text-gray-400 font-normal">My Stock</h1>
                    <div className="relative">
                        <div
                            className={`pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent rounded-xl transition-opacity duration-300 ${isScrolledToStart ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        <button
                            onClick={scrollLeft}
                            className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 
                                transition-opacity duration-300 
                                ${canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        >
                            <img
                                src={ArrowRight}
                                alt="Scroll left"
                                className="w-12 h-12 transform rotate-180"
                            />
                        </button>

                        <div ref={scrollRef} className="flex gap-4 overflow-x-auto bg-white px-3 py-5 rounded-xl whitespace-nowrap hide-scrollbar">
                            {stocks.map((stock, index) => (
                                <MyStockCard
                                    key={index}
                                    name={stock.name}
                                    logo={stock.logo}
                                    symbol={stock.symbol}
                                    price={stock.price}
                                    bgColor={bgColors[index % bgColors.length]}
                                    chartData={stock.chartData}
                                />
                            ))}

                        </div>

                        {/* Gradient fade on the right side */}
                        {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent rounded-xl" /> */}
                        <div
                            className={`pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent rounded-xl transition-opacity duration-300 ${isScrolledToEnd ? 'opacity-0' : 'opacity-100'
                                }`}
                        />

                        <button
                            onClick={scrollRight}
                            className={`absolute right-0 top-1/2 z-10 transform -translate-y-1/2  
                                transition-opacity duration-300 
                                ${canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        >
                            <img
                                src={ArrowRight}
                                alt="Scroll right"
                                className="w-12 h-12"
                            />
                        </button>
                    </div>

                    <p className='text-sm pb-4 text-gray-400 font-normal mt-10'>P&L</p>

                    <div className="flex justify-between items-stretch gap-5">
                        {/* Tesla P&L */}
                        <div className="flex justify-between w-[80%] bg-white rounded-lg p-4">
                            <div className="p-4 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex  items-center gap-2">
                                        <img src={mockPNL.logo} alt={mockPNL.company} className="w-12 h-12" />
                                        <p className="font-medium">{mockPNL.company}</p>
                                    </div>
                                    {mockPNL.isVerified && (
                                        // <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">✓</span>
                                        <img src={ArrowDown} alt='Arrow Down' className='ml-3' />
                                    )}
                                </div>
                                <p className="text-2xl font-bold text-black">
                                    <span className='font-normal text-sm'>NGN    </span>{mockPNL.totalValue}</p>
                                <p className="text-sm text-green-600 font-medium mt-2">
                                    {mockPNL.change24h} <span className="text-gray-400 ml-3">24h</span>
                                </p>
                            </div>

                            {/* Profit & Loss */}
                            <div className="flex w-[50%] gap-4">
                                <div className="p-4 border-[#77B90054] h-full flex flex-col justify-between rounded-lg border w-[50%]">
                                    <p className="text-sm text-gray-500">Profit</p>
                                    <p className="text-xl font-semibold text-black">
                                        {mockPNL.profit.amount}
                                    </p>
                                    <p className="text-sm text-end text-green-500">
                                        {mockPNL.profit.type === "down" ? "↓" : "↑"} {mockPNL.profit.change}
                                    </p>
                                </div>
                                <div className="p-4 border-[#FF2F2F42] flex flex-col justify-between rounded-lg border w-[50%]">
                                    <p className="text-sm text-gray-500">Loss</p>
                                    <p className="text-xl font-semibold text-black">
                                        {mockPNL.loss.amount}
                                    </p>
                                    <p className="text-sm text-end text-red-500">
                                        {mockPNL.loss.type === "down" ? "↓" : "↑"} {mockPNL.loss.change}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Total Assets */}
                        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between flex-col w-[20%]">
                            <p className="text-sm font-medium">Total Assets Value</p>
                            <div className="h-12 w-12">
                                <img src={ArrowDownUp} alt="" />
                            </div>
                            <div className='flex items-end justify-between'>
                                <p className="text-2xl font-semibold text-black">
                                    {mockPNL.totalAssets.value}
                                </p>
                                <div className='flex flex-col items-center'>
                                    <p className="text-sm text-red-500 px-3 rounded-lg py-1 bg-[#F9DFDF]">
                                        {mockPNL.totalAssets.change}
                                    </p>
                                    <p className='text-gray-400 text-sm'>A.T.L</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-sm mt-10 font-normal text-gray-400">Trade</h2>
                    
                    <div className="bg-white mt-4 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2></h2>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-md text-sm w-60"
                            />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="text-gray-500 border-b">
                                        <th className="p-2 font-medium">Name</th>
                                        <th className="p-2 font-medium">Price</th>
                                        <th className="p-2 font-medium">Change 24h</th>
                                        <th className="p-2 font-medium">Change 7d</th>
                                        <th className="p-2 font-medium text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStocks.map((stock) => (
                                        <tr key={stock.symbol} className="border-b hover:bg-gray-50">
                                            <td className="p-2 flex items-center gap-2">
                                                <img src={stock.logo} alt={stock.name} className="w-6 h-6" />
                                                <span>{stock.name}</span>
                                            </td>
                                            <td className="p-2">{stock.price}</td>
                                            <td className="p-2 text-green-600">{stock.change24h}</td>
                                            <td className="p-2 text-red-500">{stock.change7d}</td>
                                            <td className="p-2 flex justify-end gap-2">
                                                <button className="px-3 py-1 text-white bg-black rounded">Buy</button>
                                                <button className="px-3 py-1 text-black border border-black rounded">Sell</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredStocks.length === 0 && (
                                <p className="text-center text-gray-400 py-4">No results found.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
