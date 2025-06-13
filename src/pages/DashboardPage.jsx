import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import avatar from "../Assests/Rectangle.svg";
import cup from "../Assests/icons/cup2.svg";
import TeslaLogo from "../Assests/icons/tesla-motors-1 1.svg";
import graph from "../Assests/icons/Group 3.svg";
import ChevronDownIcon from "../Assests/icons/arrow-right.svg";
import NasdacLogo from "../Assests/icons/Ellipse 13.svg";
import NasdacGraph from "../Assests/icons/Vector 2.svg";
import ArrowRight from "../Assests/icons/arrow-square-right.svg";
import LossIcon from "../Assests/icons/danger.svg";
import AmazonLogo from "../Assests/icons/amazon-icon-1 1.svg";
import MicrosoftLogo from "../Assests/icons/microsoft 2.svg";
import WatchlistPlus from "../Assests/icons/Frame 1255.svg";
import LeaderboardChart from "../component/charts/LeaderboardChart";
import MonthlyCashFlowChart from "../component/charts/MonthlyCashFlowChart";

function DashboardPage() {
    const [data, setData] = useState(null);
    const stockRefs = useRef([]);
    const [visibleStocks, setVisibleStocks] = useState([]);
    const scrollBoxRef = useRef(null);
    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => Number(entry.target.dataset.index));
                setVisibleStocks(visible);
            },
            {
                root: document.querySelector("#stock-scroll-box"),
                threshold: 0.8,
            }
        );

        stockRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        //Mock data for now
        setData({
            user: {
                name: "Adesare Olugbagi",
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
                    abbrevation: "TSLA",
                    growth: "+17.63",
                    logo: <img src={TeslaLogo} alt="logo" />,
                    graph: <img src={graph} alt="graph" />
                },
                {
                    name: "Nasdac.",
                    invested: "8,000-",
                    current: "35,750-",
                    abbrevation: "NSDC",
                    growth: "-17.63",
                    logo: <img src={NasdacLogo} alt="logo" />,
                    graph: <img src={NasdacGraph} alt="graph" />
                },
                {
                    name: "Nasdac.",
                    invested: "8,000-",
                    current: "35,750-",
                    abbrevation: "NSDC",
                    growth: "-17.63",
                    logo: <img src={NasdacLogo} alt="logo" />,
                    graph: <img src={NasdacGraph} alt="graph" />
                },
                {
                    name: "Nasdac.",
                    invested: "8,000-",
                    current: "35,750-",
                    abbrevation: "NSDC",
                    growth: "-17.63",
                    logo: <img src={NasdacLogo} alt="logo" />,
                    graph: <img src={NasdacGraph} alt="graph" />
                },
                {
                    name: "Nasdac.",
                    invested: "8,000-",
                    current: "35,750-",
                    abbrevation: "NSDC",
                    growth: "-17.63",
                    logo: <img src={NasdacLogo} alt="logo" />,
                    graph: <img src={NasdacGraph} alt="graph" />
                },
            ],
            lifeEvents: [
                { logo: <img src={TeslaLogo} />, title: "Your Tesla stock just dropped by", source: "Tesla Inc.", change: "+7.12%" },
                { logo: <img src={LossIcon} />, title: "You just lost your job", source: "Loss", change: "-75.0%" },
            ],
            watchlist: [
                { logo: <img src={AmazonLogo} />, name: "Amazon.com, Inc.", code: "AMZN", price: "NGN 25,OOO", change: "+3.02" },
                { logo: <img src={NasdacLogo} />, name: "Nasdac.", code: "NSDC", price: "NGN 25,OOO", change: "-0.32" },
                { logo: <img src={MicrosoftLogo} />, name: "Microsoft Corp", code: "MSFT", price: "NGN 25,OOO", change: "+0.36" },
                { logo: <img src={NasdacLogo} />, name: "Nasdac.", code: "NSDC", price: "NGN 25,OOO", change: "+2.30" },
                { logo: <img src={NasdacLogo} />, name: "Nasdac.", code: "NSDC", price: "NGN 25,OOO", change: "+2.30" },
            ],
        });
    }, []);
    useEffect(() => {
        const scrollBox = scrollBoxRef.current;

        const checkScroll = () => {
            if (scrollBox) {
                setCanScrollUp(scrollBox.scrollTop > 0);
                setCanScrollDown(
                    scrollBox.scrollTop + scrollBox.clientHeight < scrollBox.scrollHeight
                );
            }
        };

        if (scrollBox) {
            scrollBox.addEventListener("scroll", checkScroll);
            // Delay the initial check slightly
            setTimeout(checkScroll, 100);
        }

        return () => {
            if (scrollBox) scrollBox.removeEventListener("scroll", checkScroll);
        };
    }, [data]);



    if (!data) return <div className="text-center mt-32">Loading...</div>;

    return (
        <div className="flex h-screen font-poppins">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 flex flex-col overflow-y-auto bg-[#f8f9fc] px-8 pt-4">
                    <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Persona Overview</p>
                    <div className="flex gap-6 mb-10 w-[100%]">
                        {/* Persona Overview */}
                        <div className="bg-white rounded-xl col-span-1 pr-12 pl-12 py-6 w-[28%] flex flex-col items-center justify-between text-center min-h-[300px]">
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
                            <div className="p-6 items-center flex flex-col w-[25%]">
                                <p className="text-left ml-[-55px] text-sm text-gray-400 font-normal">Leaderboard</p>
                                {/* <LeaderboardChart /> */}
                                <div>
                                    <div className="mt-5 w-40 h-40 bg-[#EDA60080] border-1 border-[#FF9900] rounded-full"></div>
                                </div>
                            </div>
                            <div className="hidden md:block h-auto w-px bg-gray-200"></div>
                            <div className="p-6  w-[75%]">
                                <p className="text-sm text-gray-400 font-normal mb-5">Monthly cash flow</p>
                                <MonthlyCashFlowChart />
                            </div>

                        </div>
                    </div>

                    {/* Portfolio + Life Events + Watchlist */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  flex-grow min-h-0">
                        {/* Portfolio */}
                        <div>
                            <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Portfolio</p>
                            <div className="bg-white rounded-xl px-3 pt-5 pb-0 h-full ">
                                <p className="font-normal">Balance</p>
                                <div className="flex gap-3 mt-1">
                                    <p className="text-lg font-medium p-4 rounded-xl text-white w-[70%] bg-blue-600">NGN {data.balance}</p>
                                    <p className="text-sm text-center flex justify-center items-center rounded-lg bg-[#c7ffa5] 00 w-[30%]">{data.portfolioGrowth}</p>
                                </div>

                                <p className="mt-6 font-normal">Invested</p>
                                <p className="text-lg font-medium p-4 rounded-xl mt-1 w-[100%] bg-black text-white inline-block">
                                    NGN {data.invested}
                                </p>

                                <div className="mt-6">
                                    <p className="font-normal mb-2">My Stock</p>
                                    <div className="relative">
                                        {/* Scrollable area */}
                                        <div
                                            id="stock-scroll-box"
                                            ref={scrollBoxRef}
                                            className="max-h-[160px] overflow-y-auto pr-2 hide-scrollbar"
                                        >

                                            {data.stocks.map((stock, index) => (
                                                <div
                                                    key={index} // ✅ ADD this line
                                                    data-index={index} // ✅ Needed for Intersection Observer
                                                    ref={(el) => (stockRefs.current[index] = el)}
                                                >
                                                    <div className="flex justify-between items-center px-3">
                                                        <div className="flex items-center">
                                                            <div>{stock.logo}</div>
                                                            <p className="ml-3 text-base font-medium">{stock.name}</p>
                                                        </div>
                                                        <div>
                                                            <p className="">{stock.abbrevation}</p>
                                                            <p className="text-xs text-[#77B900]">{stock.growth}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center mb-3 mt-5">
                                                        <div>
                                                            <p className="text-base text-gray-500">Invested Value</p>
                                                            <p>NGN {stock.invested}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-base text-gray-500">Current Value</p>
                                                            <p>NGN {stock.current}</p>
                                                        </div>
                                                        <div>{stock.graph}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* ✨ Only show blur if stock at index 1 is not fully visible */}
                                        {!visibleStocks.includes(1) && (
                                            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                                        )}
                                    </div>

                                    {/* Scroll down indicator */}
                                    <div className="flex justify-center mt-2 gap-2">
                                        {/* Scroll Up */}
                                        {canScrollUp && (
                                            <button
                                                onClick={() =>
                                                    scrollBoxRef.current?.scrollBy({ top: -100, behavior: "smooth" })
                                                }
                                                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700"
                                            >
                                                <img
                                                    src={ChevronDownIcon}
                                                    alt="Scroll up"
                                                    className="w-4 h-4 rotate-180"
                                                />
                                            </button>
                                        )}

                                        {/* Scroll Down */}
                                        {canScrollDown && (
                                            <button
                                                onClick={() =>
                                                    scrollBoxRef.current?.scrollBy({ top: 100, behavior: "smooth" })
                                                }
                                                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700"
                                            >
                                                <img src={ChevronDownIcon} alt="Scroll down" className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Life Events */}
                        <div>
                            <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Life Events</p>
                            <div className="bg-white rounded-xl p-5 h-full">
                                {data.lifeEvents.map((lifeEvent, idx) => (
                                    <div key={idx} className="mb-4 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center">
                                                <span>{lifeEvent.logo}</span>
                                                <p className="text-base ml-2 font-medium">{lifeEvent.source}</p>
                                            </div>
                                            <p className="text-lg w-52">{lifeEvent.title}</p>
                                        </div>
                                        <div className="flex flex-col items-end mt-4">
                                            <p className={`text-xl font-medium ${lifeEvent.change.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                                                {lifeEvent.change}
                                            </p>
                                            <button
                                                onClick={() => console.log(`Clicked on ${lifeEvent.source}`)}
                                                className="w-8 h-8 mt-5  rounded-full hover:bg-gray-100"
                                            >
                                                <img src={ArrowRight} alt="Go to details" className="w-8 h-8" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Watchlist */}
                        <div>
                            <p className="pb-4 font-poppins text-sm text-gray-400 font-normal invisible">Watchlist</p>
                            <div className="bg-white rounded-xl p-5 h-full">
                                <div className="flex justify-between">
                                    <p className="font-normal mb-4">Watchlist</p>
                                    <button
                                        onClick={() => console.log("Add new stock")}
                                        className="flex justify-center items-center rounded-lg hover:bg-blue-700 hover:w-8 h-8"
                                    >
                                        <img src={WatchlistPlus} alt="Add" className="" />
                                    </button>
                                </div>
                                {data.watchlist.map((item, idx) => (
                                    <div>
                                        <div key={idx} className="flex justify-between items-center my-6">
                                            <div className="flex items-center">
                                                <span>{item.logo}</span>
                                                <div className="ml-2">
                                                    <p className="text-base font-normal">{item.name}</p>
                                                    <p className="text-sm text-gray-400">{item.code}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-base font-normal font-poppins">{item.price}</p>
                                                <p
                                                    className={`text-base ${item.change.startsWith("-") ? "text-red-600" : "text-green-600"
                                                        }`}
                                                >
                                                    {item.change}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full h-px bg-gray-200"></div>
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