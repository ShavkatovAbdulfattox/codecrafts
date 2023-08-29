import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
function Calendar() {
  const contributions = [
    { date: "2023-08-01", count: 1 },
    { date: "2023-08-02", count: 2 },
    { date: "2023-08-03", count: 3 },
    { date: "2023-08-13", count: 5 },
    { date: "2023-08-15", count: 3 },

    // Add more contribution data
  ];

  // Define GitHub-like colors for different contribution counts
  const colorScale = ["#015e10", "#3eff5e", "#03941b", "#02af1f", "#02c924"];

  return (
    <section className="mt-5">
      <div
        style={{
          backgroundColor: "rgb(40 40 40)",
          padding: "16px", // Optional padding
        }}
      >
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2023-12-31")}
          values={contributions}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return `dark`; // Use a class for cells with count 0
            }
            // Map contribution counts to GitHub-like colors
            const index = Math.min(value.count, colorScale.length - 1);
            return `color-github-${index}`;
          }}
        />
      </div>
    </section>
  );
}

export default Calendar;
