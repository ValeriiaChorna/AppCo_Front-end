import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function ChartLine({ data, Ykey }) {
  const addField = data.map(el => {
    const date = new Date(el.date);
    const month = date.getMonth();
    const res = {
      ...el,
      formatDate:
        el.date.slice(8) + '.' + monthName[month] + '.' + el.date.slice(2, 4),
    };
    return res;
  });

  return (
    <div className="ChartLine">
      <LineChart
        width={1180}
        height={300}
        data={addField}
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line
          type="basis"
          dataKey={Ykey} //"clicks"
          stroke="#3a80ba"
          strokeWidth={5}
          dot={false}
        />
        <XAxis
          dataKey="formatDate"
          tick={{
            stroke: '#CCCCCC',
            strokeWidth: 1,
          }}
          tickMargin={16}
          tickLine={false}
          //   tickFormatter={formatXAxis}
        />
        <YAxis
          tick={{
            stroke: '#CCCCCC',
            strokeWidth: 1,
          }}
          tickMargin={16}
          axisLine={false}
          tickLine={false}
        />
        <CartesianGrid vertical={false} /> <Tooltip />
        animationDuration = {3000}
      </LineChart>
    </div>
  );
}
