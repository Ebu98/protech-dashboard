// function BarsPlaceholder() {
//   const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   return (
//     <div className="bars">
//       {months.map((m, i) => (
//         <div key={m} className="bar-col">
//           <div className="bar blue" style={{ height: `${40 + ((i * 13) % 50)}px` }} />
//           <div className="bar green" style={{ height: `${30 + ((i * 7) % 40)}px` }} />
//           <div className="bar red" style={{ height: `${20 + ((i * 11) % 35)}px` }} />
//           <span className="bar-label">{m}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default BarsPlaceholder;

// GroupedBarSVG.jsx
// import React, { useMemo } from 'react';
// import { data } from '../data/data';

// const colors = {
//   blue:  '#2F5BFF',
//   green: '#22C55E',
//   red:   '#EF4444',
// };

// export default function BarsPlaceholder({
//   width = '100%',
//   domainMax = 50,        // top of y-axis in millions
//   threshold = 10,
// }) {
//   // Layout constants
//   const margins = { top: 10, right: 20, bottom: 28, left: 40 };
//   const innerH =  - margins.top - margins.bottom;
//   const innerW = 800; // SVG viewBox width; we'll scale via viewBox for responsiveness

//   const viewBox = `0 0 ${innerW + margins.left + margins.right}`;

//   // X layout
//   const n = data.length;         // months
//   const groupGap = 24;           // gap between groups
//   const groupWidth = ((innerW - groupGap * (n - 1)) / n);
//   const series = ['blue', 'green', 'red'];
//   const barGap = 6;
//   const barWidth = (groupWidth - barGap * (series.length - 1)) / series.length;

//   // Y scale (value in millions -> pixel)
//   const yScale = (v) => {
//     const ratio = v / domainMax;
//     return margins.top + innerH * (1 - ratio);
//   };

//   const ticks = [0, 10, 20, 30, 40, 50];

//   const groups = useMemo(() => {
//     return data.map((d, i) => {
//       const x0 = margins.left + i * (groupWidth + groupGap);
//       return { ...d, x0 };
//     });
//   }, [data]);

//   return (
//     <div style={{ width, background: 'white' }}>
//       <svg viewBox={viewBox} preserveAspectRatio="xMinYMin meet" width="100%" height="100%">
//         {/* Y grid (horizontal) */}
//         {ticks.map((t, i) => (
//           <line
//             key={`grid-${i}`}
//             x1={margins.left}
//             x2={margins.left + innerW}
//             y1={yScale(t)}
//             y2={yScale(t)}
//             stroke={i === 0 ? '#eaeaea' : '#f3f3f3'}
//           />
//         ))}

//         {/* Y axis line */}
//         <line
//           x1={margins.left}
//           x2={margins.left}
//           y1={margins.top}
//           y2={margins.top + innerH}
//           stroke="#eaeaea"
//         />

//         {/* Y ticks & labels */}
//         {ticks.map((t, i) => (
//           <g key={`ytick-${i}`} transform={`translate(${margins.left}, ${yScale(t)})`}>
//             <text
//               x={-8}
//               y={4}
//               textAnchor="end"
//               fontSize="12"
//               fill="#7c7c7c"
//             >
//               {t}m
//             </text>
//           </g>
//         ))}

//         {/* Dashed threshold */}
//         <line
//           x1={margins.left}
//           x2={margins.left + innerW}
//           y1={yScale(threshold)}
//           y2={yScale(threshold)}
//           stroke="#00AEEF"
//           strokeDasharray="6 6"
//         />

//         {/* Bars */}
//         {groups.map((g, gi) => (
//           <g key={`g-${gi}`} transform={`translate(${g.x0}, 0)`}>
//             {series.map((s, si) => {
//               const x = si * (barWidth + barGap);
//               const v = g[s];
//               const yTop = yScale(v);
//               const h = margins.top + innerH - yTop;
//               return (
//                 <rect
//                   key={s}
//                   x={x}
//                   y={yTop}
//                   width={barWidth}
//                   height={h}
//                   fill={colors[s]}
//                   rx="2"
//                   ry="2"
//                 />
//               );
//             })}
//             {/* Month label */}
//             <text
//               x={groupWidth / 2}
//               y={margins.top + innerH + 18}
//               textAnchor="middle"
//               fontSize="12"
//               fill="#7c7c7c"
//             >
//               {g.month}
//             </text>
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }

// GroupedBarRecharts.jsx
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

export default function GroupedBarRecharts() {
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