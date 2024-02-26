import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatAreaChart = () => {
  const data = [
    {
      name: "Mon.",
      uv: 5,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tue.",
      uv: 10,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wed.",
      uv: 15,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed.",
      uv: 25,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed.",
      uv: 30,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed.",
      uv: 35,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div className={" h-[100px]"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: -18,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="95%" stopColor="#FFDFA3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#F6CF42"
            strokeWidth={3}
            fillOpacity={3}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatAreaChart;
