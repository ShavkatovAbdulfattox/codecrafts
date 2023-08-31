import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useGetUsertContributionQuery } from "../../../../services/userProfileApi";
import { useSelector } from "react-redux";
function Calendar() {
  const { userData } = useSelector((state) => state.user);
  const { data, isLoading } = useGetUsertContributionQuery(userData.id);
  const initialState = [
    { date: "2023-08-01", count: 1 },
    { date: "2023-08-02", count: 2 },
    { date: "2023-08-03", count: 3 },
    { date: "2023-08-13", count: 5 },
    { date: "2023-08-15", count: 3 },
  ];
  const [contributions, setContributions] = useState(initialState);
  // const contributions = isLoading ? fake : [data.actionResponseLists];
  useEffect(() => {
    const arr = data?.actionResponseLists
      .flatMap((item) => item)
      .map((item) => {
        return {
          date: item?.localDate,
          count: item?.submission,
        };
      });
    setContributions(arr);
  }, [isLoading, data?.actionResponseLists]);

  const colorScale = ["#015e10", "#3eff5e", "#03941b", "#02af1f", "#02c924"];

  return (
    <section className="mt-5">
      <div
        style={{
          backgroundColor: "rgb(40 40 40)",
          padding: "16px", // Optional padding
        }}
      >
        {contributions && contributions.length > 0 ? (
          <CalendarHeatmap
            startDate={
              isLoading ? new Date("2023-01-01") : data.startDate.join("-")
            }
            endDate={
              isLoading ? new Date("2023-12-31") : data.endDate.join("-")
            }
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
        ) : (
          <p className="text-2xl">No contributions data available.</p>
        )}
      </div>
    </section>
  );
}

export default Calendar;
