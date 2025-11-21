import React from "react";

const Twocardcol = ({ title, role, date }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4 md:gap-0">
      {/* Left Column - Title */}
      <div className="md:w-1/2">
        <div className="text-l text-stone-700">{title}</div>
      </div>

      {/* Right Column - Role (top) & Date (bottom) */}
      <div className="md:w-1/2 flex flex-col justify-between h-full text-right md:text-right">
        <span className="text-sm text-stone-500">{role}</span>
        <span className="text-sm text-stone-400 mt-2 md:mt-auto">{date}</span>
      </div>
    </div>
  );
};

export default Twocardcol;
