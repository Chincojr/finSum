import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import avatar from "../Assests/Rectangle (1).png"; // Replace or keep as-is for avatar image

function PersonaPage() {
    const [personaData, setPersonaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Using mock data instead of real backend API
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
            ],
        };

        setPersonaData(mockData);
        setLoading(false);
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6 space-y-6 w-full bg-gray-50 min-h-screen">
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        <>
                        {/* Unified Persona + Stats + Income/Expenses Box */}
                            <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row p-6 gap-6">
                            {/* Left: Avatar and Persona Info */}
                            <div className="flex flex-col items-center gap-6 w-[20%]">
                                {/* Avatar with border */}
                                <div className="border-4 border-orange-300 rounded-full p-1">
                                <img
                                    src={personaData.avatar}
                                    alt="User Avatar"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                </div>
                                {/* Name and Title */}
                                <div>
                                <h3 className="font-semibold text-base">{personaData.name}</h3>
                                <p className="text-sm text-gray-500 w-40">{personaData.title}</p>
                                </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block h-auto w-px bg-gray-200"></div>

                            {/* Right: Age, Score, Income, Expenses */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                                {/* Age & Score */}
                                <div className="flex justify-between w-[30%] items-center ">
                                <div className="text-center">
                                    <p className="text-gray-400 text-sm">Age</p>
                                    <p className="font-bold text-3xl">{personaData.age}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-400 text-sm">Score</p>
                                    <div className="mt-1 flex items-center justify-center w-[122px] h-[122px] rounded-full border-[1px] border-orange-500 bg-orange-100">
                                    <span className="font-bold text-black text-3xl">{personaData.score}</span>
                                    </div>
                                </div>
                                </div>

                                <div className="hidden md:block h-full w-px bg-gray-200"></div>

                                {/* Income & Expenses */}
                                <div className="flex gap-4 w-[50%] justify-evenly">
                                <div className="bg-green-100 p-4 rounded-lg w-full text-center">
                                    <p className="text-sm text-green-600">Income</p>
                                    <p className="text-lg font-semibold">NGN {personaData.income}</p>
                                </div>
                                <div className="bg-red-100 p-4 rounded-lg w-full text-center">
                                    <p className="text-sm text-red-600">Expenses</p>
                                    <p className="text-lg font-semibold">NGN {personaData.expenses}</p>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Bottom Section: Upcoming */}
                            <div className="bg-white p-4 rounded-xl shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
                                <div className="space-y-3">
                                    {personaData.upcoming.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-purple-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                                    📌
                                                </div>
                                                <span className="font-medium">{item.title}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{item.due}</span>
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
