import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import avatar from "../Assests/Rectangle.svg";
import cup from "../Assests/icons/cup2.svg"

function DashboardPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        //Mock data for now
        setData({
            user: {
                name:"Adesare Olugbagi",
                title: "Content Analyst & Digital Creator.",
                age: "18",
                score: "13/20",
                avatar,
            },
            balance: "132,250.26",
            invested: "57,000.00",
            portfolioGrowth: "+5.63%",
            stocks: [
                {
                    name: "Tesla Inc.",
                    invested: "8,000",
                    current: "43,000",
                    growth: "+17.63",
                },
                {
                    name: "Nasdaq",
                    invested: "-",
                    current: "-",
                    growth: "-7.63",
                },
            ],
            lifeEvents: [
                { title: "Your Tesla stock just dropped by", source: "Tesla Inc.", change: "+7.12%" },
                { title: "You just lost your job", source: "Loss", change: "-75.0%" },
            ],
            watchlist: [
                { name: "Amazon.com, Inc.", code: "AMZN", price: "NGN 25,000", change: "+3.02" },
                { name: "Nasdaq", code: "NSDC", price: "NGN 25,000", change: "-0.32" },
                { name: "Microsoft Corp", code: "MSFT", price: "NGN 25,000", change: "+0.36" },
                { name: "Nasdaq", code: "NSDC", price: "NGN 25,000", change: "+2.30" },
            ],
        });
    },  []);

    if (!data) return <div className="text-center mt-32">Loading...</div>;

    return (
        <div className="flex h-screen overflow-hidden font-poppins">
            <Sidebar />
            <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 bg-[#f8f9fc] px-6 py-4 overflow-y-auto">
                <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Persona Overview</p>
                <div className="flex gap-6 mb-10">
                {/* Persona Overview */}
                <div className="bg-white rounded-xl col-span-1 pr-12 pl-12 py-6 min-w-[330px] flex flex-col items-center justify-between text-center min-h-[300px]">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className="text-gray-400 font-poppins font-normal text-base">Age</p>
                            <p className="font-medium text-xl mt-3">{data.user.age}<span className="text-xs">yrs</span></p>
                        </div> 
                        <div>
                            <img src={cup} alt="cup" />
                            <p className="font-medium text-xl mt-3">{data.user.score}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={data.user.avatar} className="w-24 h-24 rounded-full border-4 border-orange-300 p-1" />
                        <h3 className="font-semibold text-lg mt-2">{data.user.name}</h3>
                        <p className="text-sm w-32 text-gray-500">{data.user.title}</p>
                    </div>
                </div>
                
                {/* Leaderboard & Graph (mocked) */}
                <div className=" flex bg-white w-[100%] rounded-xl ">
                    <div className="text-sm p-8 w-[30%] text-gray-400">
                        Leaderboard
                    </div>
                    <div className="hidden md:block h-auto w-px bg-gray-200"></div>
                    <div className=" text-sm p-8 text-gray-400">
                        Monthly Cash Flow (Mock Line Chart)
                    </div>
                </div>
            </div>

            {/* Portfolio + Life Events + Watchlist */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 ">
                {/* Portfolio */}
                <div>
                <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Player Persona</p>
                <div className="bg-white rounded-xl px-3 py-5 h-[100%]">
                    <p className="font-normal">Balance</p>
                    <div className="flex gap-3 mt-1">
                        <p className="text-lg font-medium p-4 rounded-xl text-white w-[70%] bg-blue-600">NGN {data.balance}</p>
                        <p className="text-sm text-center flex justify-center items-center rounded-lg bg-[#c7ffa5] 00 w-[30%]">{data.portfolioGrowth}</p>
                    </div>

                    <p className="mt-4 font-normal">Invested</p>
                    <p className="text-lg font-medium p-4 rounded-xl mt-1 w-[100%] bg-black text-white inline-block">
                        NGN {data.invested}
                    </p>

                    <div className="mt-6">
                        <p className="font-medium mb-2">My Stock</p>
                        {data.stocks.map((stock, index) => (
                        <div key={index} className="mb-3">
                            <p className="text-sm font-semibold">{stock.name}</p>
                            <p className="text-xs text-gray-500">Invested: NGN {stock.invested} | Current: NGN {stock.current}</p>
                            <p className="text-xs text-green-600">{stock.growth}</p>
                        </div>
                        ))}
                    </div>
                </div>
                </div>

                {/* Life Events */}
                <div>
                <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Life Events</p>
                <div className="bg-white rounded-xl p-5 h-[100%]">
                <p className="font-medium mb-4">Life Events</p>
                {data.lifeEvents.map((event, idx) => (
                    <div key={idx} className="mb-4">
                    <p className="text-sm font-semibold">{event.source}</p>
                    <p className="text-sm text-gray-600">{event.title}</p>
                    <p
                        className={`text-sm font-bold ${
                        event.change.startsWith("-") ? "text-red-600" : "text-green-600"
                        }`}
                    >
                        {event.change}
                    </p>
                    </div>
                ))}
                </div>
                </div>

                {/* Watchlist */}
                <div>
                <p className="pb-4 font-poppins text-sm text-gray-400 font-normal invisible">Watchlist</p>
                <div className="bg-white rounded-xl p-5 h-[100%]">
                <p className="font-medium mb-4">Watchlist</p>
                {data.watchlist.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-3">
                    <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.code}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-medium">{item.price}</p>
                        <p
                        className={`text-xs ${
                            item.change.startsWith("-") ? "text-red-600" : "text-green-600"
                        }`}
                        >
                        {item.change}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
                </div>
            </div>
            </main>
        </div>
    </div>
    );
}

export default DashboardPage;