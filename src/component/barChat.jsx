import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from 'recharts';
import { data } from '../data/data';

const millionTickFormatter = (v) => `${v}m`;

function BarsPlaceholder() {
  return (
    <div style={{ width: '100%', background: 'white' }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 20, left: 30 }}
          barGap={6}
          barCategoryGap="35%" // controls group width/spacing
        >
          {/* Faint vertical grid like your screenshot */}
          <CartesianGrid stroke="#f3f3f3" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#7c7c7c', fontSize: 12 }}
            axisLine={{ stroke: '#eaeaea' }}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 10, 20, 30, 40, 50]}
            domain={[0, 50]}
            tickFormatter={millionTickFormatter}
            tick={{ fill: '#7c7c7c', fontSize: 12 }}
            axisLine={{ stroke: '#eaeaea' }}
            tickLine={false}
            width={40}
          />
          {/* Dashed threshold at ~10m */}
          <ReferenceLine
            y={10}
            stroke="#00AEEF"
            strokeDasharray="6 6"
            ifOverflow="extendDomain"
          />

          {/* Optional: minimal tooltip */}
          <Tooltip
            formatter={(value) => [`${value}m`, '']}
            contentStyle={{ borderRadius: 8, borderColor: '#eaeaea' }}
            labelStyle={{ color: '#888' }}
          />

          {/* Order to match screenshot look (blue, green, red) */}
          <Bar dataKey="blue"  fill="#2F5BFF" radius={[2, 2, 0, 0]} />
          <Bar dataKey="green" fill="#22C55E" radius={[2, 2, 0, 0]} />
          <Bar dataKey="red"   fill="#EF4444" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default BarsPlaceholder