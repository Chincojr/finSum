import React from "react";

function UserSummaryCard({ name, role, age, avatar, score }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 w-full">
            <img src={avatar} alt={`${name} avatar`} className="w-16 h-16 rounded-full object-cover" />
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{role}</p>
                <div className="text-sm mt-1 text-gray-600">Age: {age} yrs</div>
                {score && <div className="text-sm text-blue-600 font-medium mt-1">Score: {score}</div>}
            </div>
        </div>
    )
}

export default UserSummaryCard;