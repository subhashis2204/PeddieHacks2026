import { useParams } from "react-router-dom";
import Canvas from "../components/Canvas";
import Image from "../assets/image.jpg";
// import { PieChart } from "@mui/x-charts/PieChart"
import PieArcLabel from "../components/PieChart";
import IngredientsList from "../components/IngredientList";
import response from "../components/response.json";
import { LuAudioLines } from "react-icons/lu";
import IngredientTable from "../components/Table";
import Card from "../components/Card";
import HomeImage from "../assets/homepage3.png";
import HomeImageBanner from "../assets/heroimage.png";
import { NavLink, Link } from "react-router-dom";
import IconBubble from "../components/IconBubble";
import CameraIcon from "../assets/camera.png";
import Column from "../assets/column.png";
import Security from "../assets/security.png";
import Thunder from "../assets/thunder.png";

function MainPage() {
  const heroIcons = [
    {
      icon: CameraIcon,
      text: "Scan Food",
    },
    {
      icon: Column,
      text: "Nutrition Analysis",
    },
    {
      icon: Security,
      text: "Safety Check",
    },
    {
      icon: Thunder,
      text: "Smart Insights",
    },
  ];

  return (
    <>
      {/* <Canvas bgColor="bg-orange-100"> */}
      <section className="grid grid-cols-2 h-[96vh]">
        <div className="padding-8 bg-orange-50 flex items-center justify-center">
          <img src={HomeImageBanner} alt="Home" className="w-[78%]" />
        </div>

        <section className="flex flex-col gap-16 items-center justify-center bg-red-150">
          <section className="flex flex-col gap-12">
            <section className="flex flex-col gap-5">
              <p className="font-bold text-xl text-gray-500 text-center">
                Wondering what's going into your plate?
              </p>
              <p className="font-bold text-xl text-center">
                <span className="text-7xl underline decoration-green-600 underline-offset-8 decoration-wavy decoration-4">
                  Food Pharmer
                </span>
              </p>
              <section className="flex flex-col gap-2 pt-4 w-full items-center">
                <p className="font-bold text-xl text-gray-500 text-center w-[80%]">
                  Analyze ingredients, nutrition, and food safety instantly
                  using AI
                </p>
              </section>
            </section>
            <div className="flex gap-12">
              {heroIcons.map((icon) => {
                return (
                  <IconBubble IconImage={icon.icon} IconText={icon.text} />
                );
              })}
            </div>
          </section>

          <NavLink to="/profile">
            <button
              className="
  relative
  overflow-hidden
  w-[270px]
  px-10
  py-4
  rounded-xl
  font-semibold
  text-white
  bg-gradient-to-r
  from-green-500
  to-green-600
  shadow-[0_8px_24px_rgba(34,197,94,0.22)]
  transition-all
  duration-300
  ease-in-out
  hover:from-green-600
  hover:to-green-700
  hover:scale-[1.02]
  hover:shadow-[0_12px_30px_rgba(34,197,94,0.35)]
  active:scale-[0.98]
  group
"
            >
              <span
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                    "
              />
              <span className="relative z-10">Analyze Your Food</span>
            </button>
          </NavLink>
        </section>
      </section>
      {/* </Canvas> */}
    </>
  );
}

export default MainPage;
