import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Using lottie-react instead of react-lottie
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const allSkills = [
    "DSA", "CSS3", "JAVA", "HTML5", "POWERSHELL", "JAVASCRIPT", "GOOGLECLOUD", "NODE.JS", "C#", "REACT", "FIGMA", "MICROSOFT SQL SERVER", "MONGODB", "BASH COMMAND", "PARROT LINUX", "FIREBASE", "CANVA", "ADOBE PHOTOSHOP", "KALI LINUX", "UBUNTU", "PYTHON", "C++"
  ];
  const col1Skills = allSkills.slice(0, 12);
  const col2Skills = allSkills.slice(12);

  const [copied, setCopied] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  // Configuration for lottie-react

  const handleCopy = () => {
    const text = "pranjalbabel08@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      onMouseEnter={id === 3 ? () => setShowSkillsModal(true) : undefined}
      onMouseLeave={id === 3 ? () => setShowSkillsModal(false) : undefined}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            id === 3 ? '' : "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Only render title/description above for non-tech stack cards */}
          {id !== 3 && (
            <>
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
              <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                {title}
              </div>
            </>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex flex-row items-center justify-between w-full relative min-h-80 pl-8">
              {/* Left: Title and description */}
              <div className="flex-1 z-10 flex items-center h-full relative pr-8">
                {/* Remove the animated circle */}
                <div className="relative z-20">
                  <div className={`font-sans text-2xl lg:text-4xl max-w-96 font-bold z-10 leading-tight text-left`}>
                    {title}
                  </div>
                  {description && (
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mt-2">
                      {description}
                    </div>
                  )}
                </div>
              </div>
              {/* Right: Animated columns */}
              <div className="flex flex-row gap-8 w-fit h-80">
                {/* Column 1: top to bottom */}
                <div className="flex flex-col gap-5 animate-moveStack">
                  {[...col1Skills, ...col1Skills].map((item, i) => (
                    <span
                      key={"col1-" + i}
                      className="py-3 px-6 text-base lg:text-lg min-w-[10rem] opacity-90 rounded-lg text-center bg-[rgba(16,19,46,0.6)] text-white font-semibold shadow border border-white/10 animate-fadeInUp backdrop-blur-md"
                      style={{ animationDelay: `${(i % col1Skills.length) * 0.08}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {/* Column 2: bottom to top */}
                <div className="flex flex-col gap-5 animate-moveStackReverse">
                  {[...col2Skills, ...col2Skills].map((item, i) => (
                    <span
                      key={"col2-" + i}
                      className="py-3 px-6 text-base lg:text-lg min-w-[10rem] opacity-90 rounded-lg text-center bg-[rgba(16,19,46,0.6)] text-white font-semibold shadow border border-white/10 animate-fadeInDown backdrop-blur-md"
                      style={{ animationDelay: `${(i % col2Skills.length) * 0.08}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie 
                  animationData={animationData} 
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice"
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
      {id === 3 && showSkillsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
          onClick={() => setShowSkillsModal(false)}
        >
          <div
            className="bg-[#181A2A] rounded-2xl p-8 shadow-2xl max-w-2xl w-full flex flex-col items-center animate-scaleIn transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple">All My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allSkills.map((skill, i) => (
                <span
                  key={"modal-skill-" + i}
                  className="py-2 px-4 bg-[#23244a] text-white rounded-lg text-center font-semibold border border-white/10 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
