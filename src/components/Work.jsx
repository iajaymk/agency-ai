import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const Work = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      desc: "We turn ideas into powerful digital solutions that connect...",
      img: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      desc: "We turn bold ideas into powerful digital solutions that connect...",
      img: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      desc: "We turn ideas into powerful digital solutions that connect...",
      img: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our latest work"}
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance and results"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div key={index}>
            <img src={work.img} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
