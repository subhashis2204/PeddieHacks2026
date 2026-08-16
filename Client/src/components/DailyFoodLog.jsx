import React, { useState } from "react";
import { Utensils, Sparkles, ChevronRight } from "lucide-react";

export const DailyFoodLog = ({ weeklyData }) => {
  const [selectedDay, setSelectedDay] = useState("saturday");

  const days = Object.keys(weeklyData);
  const currentDayData = weeklyData[selectedDay];

  const totalCalories = currentDayData.diet.reduce(
    (sum, item) => sum + item.caloriesPerServing * item.servings,
    0,
  );
  const goal = currentDayData.calorieGoal;
  const isOverGoal = totalCalories > goal;

  const getSuggestion = () => {
    const dayName = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);

    if (!isOverGoal) {
      return `Great job! You stayed ${(
        goal - totalCalories
      ).toLocaleString()} Cal under your daily target on ${dayName}.`;
    }

    const sortedMeals = [...currentDayData.diet].sort(
      (a, b) =>
        b.caloriesPerServing * b.servings - a.caloriesPerServing * a.servings,
    );

    const largestMeal = sortedMeals[0];

    const largestMealCalories =
      largestMeal.caloriesPerServing * largestMeal.servings;

    const mealName = largestMeal.food.replace(/-/g, " ");

    return `You went ${(totalCalories - goal).toLocaleString()} Cal over your goal on ${dayName}. Your largest contributor was ${mealName} at ${largestMealCalories.toLocaleString()} Cal. Consider reducing its serving size or choosing a lighter alternative.`;
  };

  return (
    <div className="w-full max-w-[95%] mx-auto my-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl text-slate-800">
      {/* Header & Day Selectors */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-orange-100 rounded-xl">
            <Utensils className="text-orange-500" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold m-0 leading-tight text-slate-900">
              Daily Food Log
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Select a day to view logged meals and insights
            </p>
          </div>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex flex-wrap gap-2">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${
                  isSelected
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {day.slice(0, 3)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Logged Food Items List */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Logged Meals
          </span>

          {currentDayData.diet.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 border border-slate-200/80 px-4 py-3.5 rounded-xl hover:border-slate-300 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <ChevronRight size={18} className="text-orange-500" />
                <div>
                  <p className="m-0 font-bold capitalize text-slate-800 text-base">
                    {item.food.replace(/-/g, " ")}
                  </p>
                  <p className="m-0 text-xs text-slate-500 capitalize mt-0.5">
                    {item.time} • {item.servings}{" "}
                    {item.servings > 1 ? "Servings" : "Serving"}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="font-extrabold text-slate-900 text-base">
                  {(item.caloriesPerServing * item.servings).toLocaleString()}
                </span>
                <span className="text-xs font-medium text-slate-500 ml-1">
                  Cal
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Daily Summary & Suggestion Box */}
        <div className="flex flex-col gap-4">
          {/* Daily Goal Summary Card */}
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Daily Target Status
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-extrabold text-slate-900">
                {totalCalories.toLocaleString()}{" "}
                <span className="text-xs font-normal text-slate-500">
                  / {goal} Cal
                </span>
              </span>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  isOverGoal
                    ? "bg-rose-100 text-rose-600 border border-rose-200"
                    : "bg-emerald-100 text-emerald-600 border border-emerald-200"
                }`}
              >
                {isOverGoal ? "Over Goal" : "Goal Met"}
              </span>
            </div>
          </div>

          {/* Smart Suggestion Box */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl flex-1 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-amber-600">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Smart Suggestion
              </span>
            </div>
            <p className="m-0 text-sm text-slate-700 leading-relaxed font-medium">
              {getSuggestion()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyFoodLog;
