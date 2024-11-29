"use client";

import React from "react";
import { skillsData } from "@/lib/data";

interface SkillsDataProps {
    skill: string;
}

const SkillItem: React.FC<SkillsDataProps> = ({ skill }) => {
    return (
      <li className="bg-white border border-amber-100 rounded-full px-5 py-2 text-neutral-700 hover:bg-amber-50 transition-colors duration-200">
        {skill}
      </li>
    );
  };

const SkillCategory: React.FC<{ title: string; skills: readonly string[] }> = ({
    title,
    skills,
}) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">{title}</h3>
            <ul className="flex flex-wrap justify-center gap-3 text-base">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </ul>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
      <section
        id="skills"
        className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-50"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl lg:text-5xl mb-4">
            Essential Tools I use
            <span className="relative inline-block w-full">
              <span className="absolute inline-block w-full h-2 bg-amber-200 bottom-1.5"></span>
            </span>
          </h2>
          <p className="text-xl text-neutral-700">
            {`My go-to stack that brings ideas to life`}
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {Object.entries(skillsData).map(([key, category]) => (
                    <SkillCategory
                        key={key}
                        title={category.title}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;