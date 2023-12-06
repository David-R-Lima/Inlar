import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Inlar doações',
      font: {
        size: 30,
        color: "white"
      }
    },
  },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total de doações',
      data: [100,50,32, 70,80,40,33],
      backgroundColor: 'blue',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data}/>
}
