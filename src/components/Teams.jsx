import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="teams"
      className="flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to delivering exceptional results for our clients"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4
            rounded-xl border border-gray-100 dark:border-gray-700
            bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
            hover:scale-103 transition-all duration-400"
          >
            <img src={member.image} alt="" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs opacity-60">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
