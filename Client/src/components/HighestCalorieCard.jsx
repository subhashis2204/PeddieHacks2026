import React from "react";
import { Calendar } from "lucide-react";

export const HighestCalorieCard = ({
  day = "Saturday",
  calories = 3200,
  goal = 2200,
}) => {
  const difference = calories - goal;

  return (
    <div className="flex items-center gap-6 bg-[#1e293b] px-8 py-5 rounded-2xl border border-[#334155] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] w-fit my-5 mx-auto">
      <div className="flex items-center justify-center drop-shadow-[0_0_12px_rgba(248,113,113,0.4)]">
        <Calendar size={56} color="#f87171" strokeWidth={1.5} />
      </div>

      <div className="w-[1px] h-[48px] bg-[#475569]" />

      <div className="flex flex-col justify-center gap-1">
        <p className="m-0 text-[18px] font-medium text-white leading-[1.2]">
          highest calorie day
        </p>

        <p className="m-0 text-[20px] font-bold text-white leading-[1.2]">
          {day} ({calories.toLocaleString()} Cal)
        </p>

        <p className="m-0 text-xs font-semibold text-rose-400">
          {difference.toLocaleString()} Cal over goal
        </p>
      </div>
    </div>
  );
};

export default HighestCalorieCard;
