import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-designColor">
          <ResumeCard
            title="React Developer "
            subTitle="Corvo Inc - (Jan 2024 - Present)"
            result="Nepal"
            des="It is a great experience to be a React Developer"
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Lyra Innovations - (2023 - 2024)"
            result="Nepal"
            des="I had a very good experience working here and it was great place to learnn and develop."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Fellowship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-designColor">
          <ResumeCard
            title="Code Like Her'2023"
            subTitle="Code Rush Pvt Ltd (Dec 2023-present)"
            result="Nepal"
            des="Its a great oppurtunity to be part of Code Like Her."
          />
          <ResumeCard
            title="Data Fellowship"
            subTitle="Code for Nepal (2023 -present)"
            result="Nepal"
            des="Its a great learning platform to develop knowlwdge and skills on Machine Learning."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
