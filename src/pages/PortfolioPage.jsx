// src/pages/PortfolioPage.js
import React, { useRef, useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import MyStockCard from '../component/MyStockCard';
import MetaLogo from "../Assests/icons/meta.svg";
import TeslaLogo from "../Assests/icons/tesla-motors-1 1.svg";
import ArrowRight from "../Assests/icons/arrowright.svg";
import { LineChart, Line, ResponsiveContainer } from "recharts";

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


    // const handleScroll = () => {
    //     const el = scrollRef.current;
    //     if (!el) return;

    //     const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    //     setIsScrolledToEnd(isAtEnd);
    // };

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
        handleScroll(); // initial check

        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex h-screen bg-gray-50 font-poppins">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className=" overflow-auto bg-gray-50 px-8 pt-4">

                    <h1 className="text-sm pb-4 text-gray-400 font-normal">My Stock</h1>
                    <div className="relative">
                        {/* Left Arrow Button */}
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

                    <p className='text-sm pb-4 text-gray-400 font-normal'>P&L</p>

                    <div className="flex justify-between items-center">
                        {/* Tesla P&L */}
                        <div className='flex  justify-between w-[80%] bg-white rounded-lg p-4'>
                            <div className=" p-4 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src="/tesla.png" alt="Tesla" className="w-6 h-6" />
                                        <p className="font-semibold">Tesla Inc.</p>
                                    </div>
                                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">✓</span>
                                </div>
                                <p className="text-2xl font-bold text-black">NGN 77,000.00</p>
                                <p className="text-sm text-green-600 font-medium">
                                    +9.02% <span className="text-gray-400">24h</span>
                                </p>
                            </div>

                            {/* Profit */}
                            <div className='flex w-[50%] gap-4 '>
                                <div className="p-4 border-[#77B90054] rounded-lg border w-[50%]">
                                    <p className="text-sm text-gray-500">Profit</p>
                                    <p className="text-xl font-semibold text-black">NGN 16,300</p>
                                    <p className="text-sm text-red-500">↓ -6.36%</p>
                                </div>
                                <div className='p-4 border-[#FF2F2F42] rounded-lg border w-[50%]'>
                                </div>

                            </div>
                        </div>

                        {/* Total Assets */}
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <p className="text-sm text-gray-500">Total Assets Value</p>
                            <div className="flex justify-between items-center mt-1">
                                <div className="h-12 w-20">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={[{ value: 100 }, { value: 110 }, { value: 90 }, { value: 120 }]}>
                                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-black">NGN 136,650</p>
                                    <p className="text-sm text-red-500">-2.16%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
