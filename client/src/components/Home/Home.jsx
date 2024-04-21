import React, { useState, useEffect } from "react";
import Calendar from "../General/Calender";
import { getAllDreams } from "../../lib/dreams";

export default function HomeComponent() {
  const [dreams, setDreams] = useState([]);
  useEffect(() => {
    const fetchDreams = async () => {
      const data = await getAllDreams();

      if (data.success) {
        console.log(data);
        setDreams(data.dreams);
      }
    };

    fetchDreams(); // Call the fetchDreams function to trigger the data fetching
  }, []); // Don't forget to add an empty dependency array to useEffect

  return (
    <div className="flex justify-center px-6">
      <div>
        <h1 className="mt-18 text-[40px] text-center text-white">
          Tell me your <br />
          <span className="text-[60px] text-purple-primary">Dream</span>
        </h1>
        <div className="flex justify-center">
          <Calendar />
        </div>

        {dreams && dreams.length > 0 ? (
          dreams.map((dream, index) => (
            <p
              key={index}
              className="p-5 border-2 border-purple-secondary text-[20px] rounded-2xl font-semibold text-white"
            >
              {dream?.createdAt}
            </p>
          ))
        ) : (
          <p className="text-white text-center">You're dreaming to small</p>
        )}
        {dreams.length > 0 && (
          <div className="flex justify-center">
            <button className="flex justify-center items-center">
              <p className="w-[180px] text-[20px] text-purple-secondary font-semibold">
                load more
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30px"
                height="30px"
              >
                <path
                  style={{ fill: "#ffffff" }} // Change the fill color to white
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="flex justify-center my-8">
          <button className="text-white text-[40px] border px-9 py-1 rounded-[32px] bg-purple-primary">
            Log dream
          </button>
        </div>
      </div>
    </div>
  );
}
