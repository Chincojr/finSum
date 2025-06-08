import React from "react";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

function StatCard({ title, amount, type = 'income', icon }) {
    const isIncome = type === 'income';
    const bgColor = isIncome ? 'bg-green-100' : 'bg-red-100';
    const textColor = isIncome ? 'text-green-700' : 'text-red-700';
    const IconComponent = isIncome ? ArrowUpRight : ArrowDownRight;

    return (
        <div className={`p-4 rounded-xl shadow-sm ${bgColor} flex items-center gap-4`}>
            <div className={`p-2 rounded-full ${textColor} bg-white`}>
                {icon || <IconComponent className="w-5 h-5" />}
            </div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className={`text-lg font-semibold ${textColor}`}>{amount}</p>
            </div>
        </div>
  );
};

export default StatCard;