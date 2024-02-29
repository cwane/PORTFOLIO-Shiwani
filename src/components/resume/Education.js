import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 text-designColor"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-designColor">
          <ResumeCard
            title="Bachelors in Computer Engineering(BCT)"
            subTitle="IOE, Thapathali Campus"
            result="3.5/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the technology or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary Education (Intermediate level) "
            subTitle="Shikshadeep Higher Secondary School"
            result="3.71/4"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Balmiki Secondary English Boarding School"
            result="3.75/4"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Education;
