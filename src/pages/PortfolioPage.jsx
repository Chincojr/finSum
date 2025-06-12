// src/pages/PortfolioPage.js
import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import MyStockCard from '../component/MyStockCard';
import MetaLogo from "../Assests/icons/meta.svg";
import TeslaLogo from "../Assests/icons/tesla-motors-1 1.svg"

export default function PortfolioPage() {
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

                    <div className="flex gap-4 overflow-x-auto bg-white px-3 py-5 rounded-xl">
                        <MyStockCard
                            name="Meta"
                            logo={MetaLogo}
                            symbol="META"
                            price={30000}
                            chartData={[
                                { name: "1", value: 45 },
                                { name: "2", value: 50 },
                                { name: "3", value: 47 },
                                { name: "4", value: 60 },
                                { name: "5", value: 58 },
                                { name: "6", value: 63 },
                                { name: "7", value: 70 },
                            ]}

                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        <MyStockCard
                            name="Tesla Inc."
                            logo={TeslaLogo}
                            symbol="TSLA"
                            price={23145}
                            chartData={[
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
                            ]}
                        />
                        {/* Add more stock cards here */}
                    </div>
                </main>
            </div>
        </div>
    );
}
