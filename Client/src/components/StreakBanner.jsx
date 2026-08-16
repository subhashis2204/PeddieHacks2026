import React from "react";
import { Flame } from "lucide-react";

export const StreakBanner = ({ daysMet = 3 }) => {
  return (
    <div className="flex items-center gap-6 bg-[#1e293b] px-8 py-5 rounded-2xl border border-[#334155] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] w-fit my-5 mx-auto">
      {/* Left side: Flame Icon */}
      <div className="flex items-center justify-center drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]">
        <Flame size={56} color="#f97316" fill="#f97316" strokeWidth={1.5} />
      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-[48px] bg-[#475569]" />

      {/* Right side: Text Content */}
      <div className="flex flex-col justify-center gap-2">
        <p className="m-0 text-[20px] font-medium text-white leading-[1.2]">
          you achieved your goal
        </p>
        <p className="m-0 text-[20px] font-bold text-white leading-[1.2]">
          {daysMet} times this week
        </p>
      </div>
    </div>
  );
};

export default StreakBanner;
