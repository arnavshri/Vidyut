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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  plugins: [{
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  }, ChartDataLabels],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900'],

    }
  ],

};

const createData = (values, labels) => {
  return {
    labels,
    datasets: [
      {
        label: `Estimated Revenue`,
        data: values,
        backgroundColor: [`rgba(255, 99, 132, 0.5)`, 'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'],
        barPercentage: 0.9,
        categoryPercentage: 1,
        // datalabels : {
        //   color : 'black',
        //   align:'center',
        //   anchor : 'top',
        //   formatter: function(value, context) {
        //     return `$ ${numberWithCommas(value)}`
        //   }
        // }
      }
    ]
  }
}


var chartOptions = {
  responsive: true,
  legend: {
    position: "bottom"
  },
  title: {
    display: true,
    text: "Chart.js Bar Chart"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

var barChartData = {
  labels: [
    "User",
    "Global Data",
  ],
  datasets: [
    {
      label: "Traditional Vehicle",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [2817.64, 2400]
    },
    {
      label: "Electric Vehicle",
      backgroundColor: "lightblue",
      borderColor: "green",
      borderWidth: 1,
      data: [351.5, 78.23]
    },
  ]
};


export default function App({ values, labels }) {
  return <Bar options={chartOptions} data={barChartData} />;
}