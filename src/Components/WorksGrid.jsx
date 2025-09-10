import React from "react";
import { Link } from "react-router-dom";

const WorksGrid = ({ works }) => {
  // Dividir los trabajos en grupos de 2 para crear las filas
  const rows = [];
  for (let i = 0; i < works.length; i += 2) {
    rows.push(works.slice(i, i + 2));
  }

  return (
    <section className="">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 md:grid-cols-2 sm:gap-[24px] ${
            rowIndex > 0 ? "md:mt-6" : ""
          }`}
        >
          {row.map((work) => (
            <Link key={work.id} to={work.href}>
              <div
                className="work-item item-sq relative mb-3 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                style={{ backgroundImage: `url(${work.image})` }}
                id="pasando"
              >
                <div className="project-info w-[359px] md:w-[300px] mg:w-[359px] bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] md:left-[12px] mg:left-[30px] blur-bg">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p
                        className="l-desk text-[#ECECEC]"
                        style={{ fontWeight: 500 }}
                      >
                        {work.title}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      {work.tags.map((tag, tagIndex) => (
                        <p key={tagIndex} className="tags p-12 mr-[6px]">
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <p className="b4-desk text-[#ECECEC]">{work.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
};

export default WorksGrid;
