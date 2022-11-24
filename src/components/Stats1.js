import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['6000','12000','18000'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Margin',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [2700,3150,3250],
    },
    {
      type: 'bar',
      label: 'Gas',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [2700,3300,3800],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Electric',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [3000,3150,3250],
    },
  ],
};

export default function Stats1() {
  return (
    <div className=''>
  <Chart type='bar' data={data} />;
  </div>
  )
}
