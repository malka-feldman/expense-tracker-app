import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  if (!props.expenses || props.expenses.length === 0) {
    // Handle the case when expenses is undefined or an empty array
    return <p>No data available for the chart.</p>;
  }

  const valueArray = props.expenses.map((expense) => expense.amount);
  const totalMaximum = Math.max(...valueArray);

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
