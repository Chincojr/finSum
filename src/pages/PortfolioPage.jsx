// src/pages/PortfolioPage.js
import React, { useRef, useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import MyStockCard from '../component/MyStockCard';
import MetaLogo from "../Assests/icons/meta.svg";
import TeslaLogo from "../Assests/icons/tesla-motors-1 1.svg";
import ArrowRight from "../Assests/icons/arrowright.svg";

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
            price: 30000,
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

                        <div ref={scrollRef}  className="flex gap-4 overflow-x-auto bg-white px-3 py-5 rounded-xl whitespace-nowrap hide-scrollbar">
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
                </main>
            </div>
        </div>
    );
}
