import React from "react";

function UserSummaryCard({ name, age, role, image }) {
    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <img src={image} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full" />
            <div>
                <h2 className="font-semibold">{name}</h2>
                <p className="etxt-sm text-gray-500">{role}</p>
                <p className="etxt-sm text-gray-500">Age: {age} yrs</p>
            </div>
        </div>
    )
}

export default UserSummaryCard;