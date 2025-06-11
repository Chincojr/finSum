import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import avatar from "../Assests/Rectangle.svg"; 
import HomeIcon from "../Assests/icons/house-2.svg";
import SchoolIcon from "../Assests/icons/teacher.svg";
import UtilityIcon from "../Assests/icons/receipt-2.svg";
import AirplaneIcon from "../Assests/icons/airplane.svg";
import ArrowUp from "../Assests/icons/arrow-up.svg";
import ArrowDown from "../Assests/icons/arrow-down.svg";

function PersonaPage() {
    const [personaData, setPersonaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const mockData = {
            name: "Adesare Olugbagi",
            title: "Content Analyst & Digital Creator.",
            avatar: avatar,
            age: "18yrs",
            score: "13/20",
            income: "100,000.00",
            expenses: "108,000.70",
            upcoming: [
                { title: "Pay Rent", due: "Due in 4 days" },
                { title: "Pay Tuition", due: "Due in a week" },
                { title: "Pay Utilities", due: "Due in 2 weeks" },
                { title: "Book Zanzibar tickets", due: "Due in 2 weeks" },
                { title: "Book Zanzibar tickets", due: "Due in 2 weeks" },
                { title: "Book Zanzibar tickets", due: "Due in 2 weeks" },
                { title: "Book Zanzibar tickets", due: "Due in 2 weeks" },
            ],
        };

        setPersonaData(mockData);
        setLoading(false);
    }, []);

    const iconMap = {
        "Pay Rent": HomeIcon,
        "Pay Tuition": SchoolIcon,
        "Pay Utilities": UtilityIcon,
        "Book Zanzibar tickets": AirplaneIcon,
        "Book Zanzibar tickets": AirplaneIcon,
        "Book Zanzibar tickets": AirplaneIcon,
        "Book Zanzibar tickets": AirplaneIcon,
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 overflow-y-auto bg-gray-50 px-8 pt-4">
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        <>
                        <p className="pb-4 font-poppins text-sm text-gray-400 font-normal">Player Persona</p>
                        {/* Unified Persona + Stats + Income/Expenses Box with purple gradient */}
                        <div className="relative bg-white rounded-xl mb-10 overflow-hidden">
                        {/* Purple fading background on the left */}
                        <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-[#ddcae3] to-transparent z-0" />

                        {/* #ddcae3 */}
                        {/* Main content layered above the background */}
                        <div className="relative flex flex-col md:flex-row z-10">
                            {/* Left: Avatar and Persona Info */}
                            <div className="flex flex-col items-center p-6 gap-5 w-[25%]">
                            <div className="border-4 border-orange-300 rounded-full p-1">
                                <img
                                src={personaData.avatar}
                                alt="User Avatar"
                                className="w-20 h-20 rounded-full object-cover"
                                />
                            </div>
                            <div className="font-poppins text-center">
                                <h3 className="font-semibold text-base text-center">{personaData.name}</h3>
                                <p className="text-sm text-gray-500 w-40">{personaData.title}</p>
                            </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block h-auto w-px bg-gray-200"></div>

                            {/* Right: Age, Score, Income, Expenses */}
                            <div className="flex flex-col md:flex-row gap-10 items-center  w-full">
                            <div className="flex justify-between w-[35%] p-6 items-center ">
                                <div className="flex flex-col gap-3">
                                <p className="text-gray-400 font-poppins font-normal text-base">Age:</p>
                                <p className="font-medium mb-[-10px] font-poppins text-3xl">{personaData.age}</p>
                                </div>
                                <div className="font-poppins">
                                <p className="text-gray-400 text-sm font-normal ">Score</p>
                                <div className="mt-1 flex items-center justify-center w-[122px] h-[122px] rounded-full border-[1px] border-orange-500 bg-orange-100">
                                    <span className="font-medium text-black text-3xl">{personaData.score}</span>
                                </div>
                                </div>
                            </div>

                            <div className="hidden md:block h-full w-px bg-gray-200"></div>

                            <div className="flex flex-col gap-4 w-[50%] justify-evenly p-6 font-poppins">
                                <p className="text-gray-400 font-poppins font-normal text-sm">Stats</p>
                                <div className="flex gap-3">
                                <div className="bg-[#C7FFA5] p-6 rounded-lg w-full">
                                    <p className="text-lg font-semibold">NGN {personaData.income}</p>
                                    <div className="flex w-[100%] flex-col items-end">
                                    <div className="flex">
                                        <img src={ArrowDown} alt="Arrow" />
                                        <p className="text-sm mt-2">Income</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="bg-red-100 p-6 rounded-lg w-full">
                                    <p className="text-lg font-semibold">NGN {personaData.expenses}</p>
                                    <div className="flex w-[100%] flex-col items-end">
                                    <div className="flex">
                                        <img src={ArrowUp} alt="Arrow" />
                                        <p className="text-sm mt-2">Expenses</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> {/* closes content wrapper */}
                        </div> {/* closes entire box with gradient */}
                            <p className=" text-sm text-gray-400 font-normal font-poppins mb-4">Upcoming</p>

                            {/* Bottom Section: Upcoming */}
                            <div className="bg-white rounded-xl font-poppins">
                                <div className="">
                                    {personaData.upcoming.map((item, index) => (
                                        <div
                                            key={index}
                                            className="   rounded-lg hover:bg-gray-100 cursor-pointer"
                                            
                                        >
                                            <div className="flex items-center p-5 gap-3">
                                                <div className="bg-[rgba(68,76,229,0.35)] rounded-lg w-[60px] h-[60px] flex items-center justify-center">
                                                <img src={iconMap[item.title]} alt="icon" className="w-[32px] h-[32px]  object-contain" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.title}</span>
                                                <span className="text-sm text-gray-500">{item.due}</span>
                                            </div>
                                            </div>
                                            <div className="w-full h-px bg-gray-200"></div>
                                        </div>
                                    
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}

export default PersonaPage;
