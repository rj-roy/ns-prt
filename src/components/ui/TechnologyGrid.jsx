"use client";

import { getTechIcon } from "@/lib/techIcons";

export const TechnologyGrid = ({ technologies = [] }) => {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => {
        const IconComponent = getTechIcon(tech);
        
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-primary/5 dark:hover:bg-neutral-900 transition-colors duration-300 group"
          >
            <div className="text-4xl text-gray-700 dark:text-neutral-300 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
              <IconComponent />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-neutral-400 text-center group-hover:text-black dark:group-hover:text-white transition-colors">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
};
