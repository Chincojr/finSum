// MonthlyCashFlowChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 5000, expense: 2800 },
  { name: 'Apr', income: 4000, expense: 2400 },
  { name: 'May', income: 4500, expense: 2200 },
  { name: 'Jun', income: 4700, expense: 2000 },
  { name: 'Jun', income: 4700, expense: 2000 },
];

export default function MonthlyCashFlowChart() {
  return (
    <LineChart width={750} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#7987FF" />
      <Line type="monotone" dataKey="expense" stroke="#FFA5CB" />
    </LineChart>
  );
}
