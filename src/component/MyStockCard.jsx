// components/MyStockCard.jsx
import SparklineChart from "./charts/LineChart";


export default function MyStockCard({ logo, symbol, name, price, chartData }) {
    const firstValue = chartData[0]?.value || 0;
    const lastValue = chartData[chartData.length - 1]?.value || 0;
    const change = firstValue === 0 ? 0 : ((lastValue - firstValue) / firstValue) * 100;
    const isPositive = change >= 0;
    const changeColor = isPositive ? "#6C8C3C" : "#E82127";


    return (
        <div className="bg-[#A6F7E2] rounded-xl py-4 px-3 w-[22%]">
            {/* Left */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={logo} alt={`${name} logo`} className="w-8 h-8 " />
                    <p className="text-lg font-medium pl-4">{name}</p>
                </div>
                <div className="flex items-center flex-col">
                    <h3 className="text-sm font-semibold text-gray-500">{symbol}</h3>
                    <p className="text-sm font-semibold" style={{ color: changeColor }}>
                        {change >= 0 ? "+" : ""}
                        {change.toFixed(2)}%
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="flex justify-between items-end">
                <div className="">
                    <p className="mt-5 text-xs">Current Value</p>
                    <p className="text-md font-semibold text-gray-700 mt-2">NGN {price}</p>
                </div>

                <div className="w-32 h-12">
                    <SparklineChart data={chartData} />
                </div>
            </div>
        </div>
    );
}
