"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { IGraph } from "@interface/props";

const Chart = ({ graph }: IGraph) => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={graph}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="dayOfWeek"
          tickMargin={8}
          tick={{ fontSize: 12, fill: "#A9A9A9" }}
          axisLine={false}
        />
        <YAxis
          width={24}
          tickMargin={8}
          tick={{ fontSize: 13, fill: "#A6A6A6" }}
          ticks={[0, 2, 4, 6, 8]}
          axisLine={false}
          interval={0}
        />
        <Bar dataKey="count" fill="#D3C7FC" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
