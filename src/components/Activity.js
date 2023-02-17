import React, { useState, useEffect } from "react";

const ActivityChart = ({ username }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("hi");

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/events`
        );
        const events = await response.json();
        console.log(response);
        const contributions = events.filter(
          (event) => event.type === "PushEvent"
        );
        console.log(contributions);
        const data = contributions.reduce(
          (acc, { created_at }) => {
            const date = new Date(created_at);
            const week = date.getWeek();
            const day = date.getDay();
            const dateString = date.toLocaleDateString();
            const index = acc.findIndex(([date]) => date === dateString);
            if (index !== -1) {
              acc[index][1][day]++;
            } else {
              acc.push([dateString, Array.from({ length: 7 }, () => 0)]);
              acc[acc.length - 1][1][day]++;
            }
            return acc;
          },
          Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => 0))
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
      //   console.log(data)
    };
    fetchData();
  }, [username]);

  const weeks = data.length;
  const days = 7;
  const chartWidth = 12 * weeks + 1;
  const chartHeight = 12 * days + 1;
  const today = new Date();

  return (
    <svg width={chartWidth} height={chartHeight}>
      {data.map((week, i) => {
        const y = 12 * i + 1;
        return (
          <g key={i}>
            {week.map((count, j) => {
              const x = 12 * j + 1;
              const date = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate() - (weeks - i - 1) * days + j
              );
              const color = count > 0 ? "#28a745" : "#ebedf0";
              return (
                <rect
                  key={j}
                  x={x}
                  y={y}
                  width="10"
                  height="10"
                  fill={color}
                  data-count={count}
                  data-date={date.toISOString()}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};

Date.prototype.getWeek = function () {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(((date - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
  );
};

export default ActivityChart;
