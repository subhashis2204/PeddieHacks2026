import React from "react";
import { TrendingUp } from "lucide-react";

export const AvgIntakeCard = ({ avgIntake = 2000 }) => {
  return (
    <div className="flex items-center gap-6 bg-[#1e293b] px-8 py-5 rounded-2xl border border-[#334155] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] w-fit my-5 mx-auto">
      {/* Left side: Trending Up Icon */}
      <div className="flex items-center justify-center drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
        <TrendingUp size={56} color="#38bdf8" strokeWidth={1.5} />
      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-[48px] bg-[#475569]" />

      {/* Right side: Text Content */}
      <div className="flex flex-col justify-center gap-2">
        <p className="m-0 text-[20px] font-medium text-white leading-[1.2]">
          average daily intake
        </p>
        <p className="m-0 text-[20px] font-bold text-white leading-[1.2]">
          {avgIntake.toLocaleString()} Cal / day
        </p>
      </div>
    </div>
  );
};

export default AvgIntakeCard;
