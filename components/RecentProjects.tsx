"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.github ? item.github : ""}
              href={item.github ? item.github : ""}
            >
              <div
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 group"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image 
                    src="/bg.png" 
                    alt="bgimg" 
                    fill
                    className="object-cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  fill
                  className="z-10 absolute bottom-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image 
                        src={icon} 
                        alt={`icon${index + 1}`} 
                        width={32} 
                        height={32} 
                        className="p-2" 
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {item.github ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center mr-2 group"
                      title="View on GitHub"
                    >
                      <Image 
                        src="/git.svg" 
                        alt="GitHub" 
                        width={28} 
                        height={28} 
                        className="opacity-80 hover:opacity-100 transition mr-2" 
                      />
                      <span className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:underline">Click Here</span>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  ) : (
                    <>
                      <span className="flex lg:text-xl md:text-xs text-sm text-purple">Click Here</span>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/PranjalBugged-Out"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg border-2 border-purple text-white font-semibold hover:bg-purple hover:text-black transition-all duration-300 text-lg bg-transparent"
        >
          See more projects...
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
