// components/LineChartCard.jsx
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const mockChartData = [
    { day: '', price: 5.25 },
    { day: 'June 5', price: 5.5 },
    { day: 'June 6', price: 5.65 },
    { day: 'June 7', price: 5.75 },
    { day: 'June 8', price: 5.65 },
    { day: 'June 9', price: 5.75 },
    { day: 'June 10', price: 6.0 },
];

function LineChartCard({ data = mockChartData }) {
    return (
        <div className="bg-white p-6 ">
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="0" strokeWidth={0.5} stroke="#d1d5db" />
                        <XAxis dataKey="day" />
                        <YAxis domain={[4.5, 6.0]}
                            ticks={[4.5, 5.0, 5.5, 6.0]} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#FFA5CB"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default LineChartCard;
