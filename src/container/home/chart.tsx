import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { weekday: "월", value: 1 },
  { weekday: "화", value: 2 },
  { weekday: "수", value: 3 },
  { weekday: "목", value: 4 },
  { weekday: "금", value: 5 },
  { weekday: "토", value: 6 },
  { weekday: "일", value: 7 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="weekday"
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
        <Bar dataKey="value" fill="#D3C7FC" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
