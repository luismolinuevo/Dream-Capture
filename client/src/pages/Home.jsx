import React, { useState, useEffect } from "react";
import Calendar from "../components/General/Calender";
import { getAllDreams } from "../lib/dreams";

export default function Home() {
  const [dreams, setDreams] = useState([]);
  useEffect(() => {
    const fetchDreams = async () => {
      const data = await getAllDreams();

      if (data.success) {
        setDreams(data.dreams);
      }
    };

    fetchDreams(); // Call the fetchDreams function to trigger the data fetching
  }, []); // Don't forget to add an empty dependency array to useEffect

  return (
    <div className="flex justify-center px-6">
      <div>
        <h1 className="mt-24 text-[35px] text-center">
          Tell me your <br/><span className="text-[45px]">Dream</span>
        </h1>
        <Calendar />
        {dreams && dreams.length > 0 ? (
          dreams.map((dream) => (
            <p
              key={dream.id}
              className="px-2 py-1 border-2 border-[black] text-[25px] font-semibold"
            >
              {dream?.createdAt}
            </p>
          ))
        ) : (
          <p>No dreams</p>
        )}
        <div className="flex justify-center">
          <button className="flex justify-center items-center">
            <p className="w-[150px]">load more</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                style={{ fill: "#232326" }}
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="text-white text-[35px] border px-3 py-1 rounded-xl">
            Log dream
          </button>
        </div>
      </div>
    </div>
  );
}
