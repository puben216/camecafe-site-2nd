import React from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js"
import { Doughnut, Line } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
)

export const PieChartComponent = ({ data, options }) => {
  return <Doughnut data={data} options={options} />
}

export const LineChartComponent = ({ data, options }) => {
  return <Line data={data} options={options} />
}
