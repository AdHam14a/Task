import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { LinearData, options, PieChartData } from '../Data/ChartData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Charts = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-7'>
      <div className="flex justify-center items-center w-full h-96">
        <Bar options={{ ...options, responsive: true }} data={LinearData} />
      </div>
      <div className="flex justify-center items-center w-full h-96">
        <Pie data={PieChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default Charts;