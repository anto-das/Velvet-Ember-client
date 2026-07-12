import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Velvet Ember প্রিমিয়াম থিম কালার প্যালেট
const COLORS = [
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

const Chart = () => {
  const axiosSecure = useAxiosSecure();

  // chartData এর ডিফল্ট ভ্যালু খালি অ্যারে [] দেওয়া হলো বাগ এড়াতে
  const { data: chartData = [], isLoading } = useQuery({
    queryKey: ["orders-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders-stats");
      return res.data;
    },
  });

  // ডেটা রি-ফরম্যাট (নিশ্চিত করা হলো যেন ডাটা না থাকলে নাল বা ক্র্যাশ না করে)
  const pieChartData =
    chartData?.map((data) => ({
      name: data?._id || "Unknown",
      value: parseFloat(data?.quantity) || 0,
    })) || [];

  // কাস্টম বার চার্ট শেপ ট্রায়াঙ্গেল
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // কাস্টম পাই লেবেল ক্যালকুলেশন
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    if (!percent || percent < 0.05) return null; // ৫% এর কম হলে লেবেল হাইড থাকবে যাতে জ্যাম না লাগে

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 w-full">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 w-full px-2 font-sans">
      {/* ক্যাটাগরি ভিত্তিক সেলস (বার চার্ট কার্ড) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800">
            Category Statistics
          </h3>
          <p className="text-xs text-slate-400">
            Total orders breakdown by product category
          </p>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="category"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
              />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
              <Tooltip cursor={{ fill: "#f8fafc" }} />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{
                  position: "top",
                  fill: "#475569",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                {chartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* অর্ডার রেশিও (পাই চার্ট কার্ড) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800">
            Order Quantity Ratio
          </h3>
          <p className="text-xs text-slate-400">
            Percentage share of each active category
          </p>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={95}
                innerRadius={30} // ডোনাট স্টাইল লুক দেওয়ার জন্য ইনার রেডিয়াস যোগ করা হয়েছে
                dataKey="value"
              >
                {pieChartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} Orders`, name]} />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ fontSize: "13px", paddingTop: "10px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
