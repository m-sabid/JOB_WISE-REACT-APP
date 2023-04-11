import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FFBB28",
  "#FF8042",
  "#008080",
];

const ChartComponent = () => {
  const [assData, setAssData] = useState([]);

  useEffect(() => {
    fetch("AssignmentData.json")
      .then((res) => res.json())
      .then((data) => setAssData(data));
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <PieChart width={600} height={400}>
        <Pie
          data={assData}
          dataKey="assNumber"
          nameKey="assName"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {assData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartComponent;
