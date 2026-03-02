/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { TrendingUp, Target, Zap, Award } from "lucide-react";

function StatCard({ value, label, suffix = "", icon: Icon, color }) {
  const [count, setCount] = useState(0);

  // Simple count animation
  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: color + "20" }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>

        <div>
          <div className="text-xl font-bold" style={{ color }}>
            {count}
            {suffix}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiveStatsDemo() {
  const stats = [
    { value: 7, label: "Apps Today", icon: Zap, color: "#06b6d4" },
    { value: 14, label: "Success Rate", suffix: "%", icon: Target, color: "#22c55e" },
    { value: 23, label: "Interviews", icon: TrendingUp, color: "#ec4899" },
    { value: 5, label: "Offers", icon: Award, color: "#eab308" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-sm text-gray-500 font-medium">
          Live Dashboard Preview
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Simple Chart Preview */}
      <div className="mt-6">
        <div className="flex items-end gap-2 h-16">
          {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-linear-to-t from-cyan-500 to-purple-500 rounded-t"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="text-xs text-gray-500 text-center mt-2">
          Weekly Applications
        </div>
      </div>
    </div>
  );
}