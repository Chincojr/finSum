import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function SparklineChart({ data }) {
    const firstValue = data[0]?.value || 0;
    const lastValue = data[data.length - 1]?.value || 0;
    const isPositive = lastValue - firstValue >= 0;
    const strokeColor = isPositive ? "#6C8C3C" : "#E82127";
    const gradientId = isPositive ? "greenGradient" : "redGradient";

    return (
        <ResponsiveContainer width="100%" height={40}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6C8C3C" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#6C8C3C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E82127" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#E82127" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Area
                    type="linear"
                    dataKey="value"
                    stroke={strokeColor}
                    strokeWidth={2}
                    fill={`url(#${gradientId})`}
                    dot={false}
                    // margin={{ top:0, right:0, left: 0, bottom: 0 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
