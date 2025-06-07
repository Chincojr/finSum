import React from "react";

function StatCard({ label, value, color= "bg-gray-100", textColor = "text-gray-700", icon = null }) {
    return (
        <div className={`p-4 rounded-lg ${color} ${textColor} flex flex-col`}>
            <span className="text-xs font-medium mb-1"></span>
            <div className="text-lg font-bold">{value}</div>
        </div>
    )
};

export default StatCard;