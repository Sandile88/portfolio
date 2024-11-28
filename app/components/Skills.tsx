"use client";

import React from "react";
import { skillsData } from "@/lib/data";

interface SkillsDataProps {
    skill: string;
    index: number;
}

const SkillItem: React.FC<SkillsDataProps> = ({ skill, index }) => {
    return (
        <li
        className="bg-white border:black rounded-xl px-5 py-3"
        key={index}>
        {skill}
      </li>

    );
};


const Skills: React.FC = () => {

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <SkillItem skill={skill} index={index} key={index} />
        ))}
      </ul>

    </section>
  );
}

export default Skills;