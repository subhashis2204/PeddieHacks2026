import Navbar from "../components/Navbar";
import Canvas from "../components/Canvas";
import AvgIntakeCard from "../components/AvgIntakeCard";
import HighestCalorieCard from "../components/HighestCalorieCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2"; // Using Chart component to handle mixed chart types (Bar + Line)
import DailyFoodLog from "../components/DailyFoodLog";
import StreakBanner from "../components/StreakBanner";

// Register required Chart.js components including BarElement
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function Report() {
  const weeklyData = {
    monday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "oatmeal-with-berries",
          caloriesPerServing: 250,
          servings: 1,
        },
        {
          time: "morning",
          food: "boiled-eggs",
          caloriesPerServing: 150,
          servings: 1,
        },
        {
          time: "lunch",
          food: "grilled-chicken-wrap",
          caloriesPerServing: 350,
          servings: 1,
        },
        {
          time: "lunch",
          food: "greek-yogurt",
          caloriesPerServing: 150,
          servings: 1,
        },
        {
          time: "dinner",
          food: "steamed-rice-&-dal",
          caloriesPerServing: 300,
          servings: 1,
        },
      ], // Total: 1,200 Cal
    },
    tuesday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "whole-wheat-toast",
          caloriesPerServing: 200,
          servings: 2,
        },
        {
          time: "lunch",
          food: "chicken-salad",
          caloriesPerServing: 350,
          servings: 1,
        },
        {
          time: "snack",
          food: "apple-with-almonds",
          caloriesPerServing: 150,
          servings: 1,
        },
        {
          time: "dinner",
          food: "grilled-fish",
          caloriesPerServing: 300,
          servings: 1,
        },
      ], // Total: 1,200 Cal
    },
    wednesday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "pancakes-with-syrup",
          caloriesPerServing: 300,
          servings: 2,
        },
        {
          time: "lunch",
          food: "cheese-burger",
          caloriesPerServing: 550,
          servings: 1,
        },
        {
          time: "lunch",
          food: "french-fries",
          caloriesPerServing: 450,
          servings: 1,
        },
        {
          time: "snack",
          food: "chocolate-milkshake",
          caloriesPerServing: 300,
          servings: 1,
        },
        {
          time: "dinner",
          food: "butter-chicken-&-naan",
          caloriesPerServing: 600,
          servings: 1,
        },
      ], // Total: 2,500 Cal (Over Goal)
    },
    thursday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "avocado-toast",
          caloriesPerServing: 250,
          servings: 1,
        },
        {
          time: "morning",
          food: "black-coffee",
          caloriesPerServing: 150,
          servings: 1,
        },
        {
          time: "lunch",
          food: "quinoa-bowl",
          caloriesPerServing: 500,
          servings: 1,
        },
        {
          time: "dinner",
          food: "paneer-tikka-salad",
          caloriesPerServing: 300,
          servings: 1,
        },
      ], // Total: 1,200 Cal
    },
    friday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "peanut-butter-toast",
          caloriesPerServing: 400,
          servings: 2,
        },
        {
          time: "lunch",
          food: "double-chicken-biryani",
          caloriesPerServing: 500,
          servings: 2,
        },
        {
          time: "snack",
          food: "protein-bar",
          caloriesPerServing: 200,
          servings: 1,
        },
        {
          time: "dinner",
          food: "loaded-nachos",
          caloriesPerServing: 350,
          servings: 2,
        },
      ], // Total: 2,700 Cal (Over Goal)
    },
    saturday: {
      calorieGoal: 2200,
      diet: [
        {
          time: "morning",
          food: "full-breakfast-platter",
          caloriesPerServing: 500,
          servings: 2,
        },
        {
          time: "lunch",
          food: "pepperoni-pizza-slices",
          caloriesPerServing: 300,
          servings: 4,
        },
        {
          time: "snack",
          food: "ice-cream-sundae",
          caloriesPerServing: 400,
          servings: 1,
        },
        {
          time: "dinner",
          food: "creamy-pasta",
          caloriesPerServing: 600,
          servings: 1,
        },
      ], // Total: 3,200 Cal (Highest Calorie Day)
    },
  };

  const days = Object.keys(weeklyData);

  // Dynamic calculations
  const dailyTotals = days.map((day) => {
    const totalIntake = weeklyData[day].diet.reduce(
      (sum, item) => sum + item.caloriesPerServing * item.servings,
      0,
    );
    const goal = weeklyData[day].calorieGoal;
    return {
      day: day.charAt(0).toUpperCase() + day.slice(1),
      totalIntake,
      goal,
      metGoal: totalIntake <= goal,
    };
  });

  const streakDays = dailyTotals.filter((d) => d.metGoal).length;
  const avgIntake = Math.round(
    dailyTotals.reduce((sum, d) => sum + d.totalIntake, 0) / dailyTotals.length,
  );
  const highestDay = dailyTotals.reduce((max, d) =>
    d.totalIntake > max.totalIntake ? d : max,
  );

  const intakeData = dailyTotals.map((d) => d.totalIntake);
  const goalData = dailyTotals.map((d) => d.goal);

  const data = {
    labels: days.map((d) => d.charAt(0).toUpperCase() + d.slice(1)),
    datasets: [
      {
        type: "bar",
        label: "Daily Intake",
        data: intakeData,
        // Dynamic color checking against each day's threshold goal
        backgroundColor: (context) => {
          const index = context.dataIndex;
          const value = context.raw;
          const goal = goalData[index];
          return value > goal ? "#CC333F" : "#9DE0AD"; // Red if exceeds goal, Indigo otherwise
        },
        borderRadius: 4,
      },
      {
        type: "line",
        label: "Daily Goal",
        data: goalData,
        borderColor: "#FE4365",
        backgroundColor: "#FE4365",
        tension: 0.1,
        borderDash: [5, 5], // Optional: dotted line for goal threshold
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Weekly Calorie Consumption vs Goal",
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;

            if (context.dataset.type === "line") {
              return `Goal: ${value.toLocaleString()} Cal`;
            }

            const goal = goalData[context.dataIndex];
            const difference = value - goal;

            if (difference > 0) {
              return `Intake: ${value.toLocaleString()} Cal (+${difference.toLocaleString()} over goal)`;
            }

            return `Intake: ${value.toLocaleString()} Cal (${Math.abs(
              difference,
            ).toLocaleString()} under goal)`;
          },
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <Canvas bgColor="bg-orange-50 py-16">
        <div
          style={{
            height: "400px",
            width: "100vw",
            maxWidth: "80%",
            margin: "20px auto",
          }}
        >
          <Chart type="bar" data={data} options={options} />
        </div>
        <div className="grid grid-cols-3 h-24 items-center justify-center">
          <StreakBanner daysMet={streakDays} />
          <AvgIntakeCard avgIntake={avgIntake} />

          <HighestCalorieCard
            day={highestDay.day}
            calories={highestDay.totalIntake}
            goal={highestDay.goal}
          />
        </div>
        <DailyFoodLog weeklyData={weeklyData} />
      </Canvas>
    </>
  );
}
