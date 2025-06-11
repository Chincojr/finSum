// LeaderboardChart.js
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['You', 'Others'],
  datasets: [
    {
      data: [30, 70],
      backgroundColor: ['#facc15', '#e5e7eb'], // yellow and gray
      borderWidth: 0,
    },
  ],
};

export default function LeaderboardChart() {
  return <Doughnut data={data} />;
}
