import { FaLocationArrow } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const Hero = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setGlowPos({ x: "50%", y: "50%" });
  };

  return (
    <div className="relative bg-custom-gradient grid-bg min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-16">
        {/* Left: Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
          <div
            ref={imgContainerRef}
            className="relative group w-64 h-64 md:w-96 md:h-96"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated, parallax, multi-color gradient glow */}
            <div
              className="absolute rounded-full blur-[80px] opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow animate-pulse-glow z-0"
              style={{
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                background: `radial-gradient(circle at ${glowPos.x} ${glowPos.y}, #a259f7 0%, #7f00ff 40%, #00dbde 100%)`,
                pointerEvents: "none",
                transition: "background 0.2s cubic-bezier(.4,2,.6,1)",
                animation: "gradientShift 6s ease-in-out infinite alternate"
              }}
            ></div>
            {/* Profile image with floating/scale effect */}
            <div className="relative w-full h-full">
              <Image
                alt="Portrait of Pranjal"
                className="relative object-cover rounded-full border-4 border-[#a259f7] shadow-2xl animate-bounce-img z-10"
                src="/profile.jpg"
                fill
                priority
              />
            </div>
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="text-center md:text-left md:w-1/2 md:pl-12 mt-12 md:mt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Securing Experiences.
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Designing the <span className="text-[#a259f7]">Future</span>
          </h1>
          <p className="mt-8 text-base md:text-lg max-w-2xl text-gray-300">
            Hi! I&apos;m Pranjal, a Cybersecurity Enthusiast & Web Developer focused on building secure, scalable digital products.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="mt-12 px-8 py-3 border-2 border-[#a259f7] rounded-lg text-white font-medium hover:bg-[#a259f7] hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 mx-auto md:mx-0 shadow-xl">
              <span>Let&apos;s Connect – Here&apos;s My Resume</span>
            </button>
          </a>
          {/* Social Media Icons */}
          <div className="flex items-center gap-6 mt-8 ml-6 md:ml-10">
            {socialMedia.map((info) => (
              info.link ? (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={info.img} alt="icon" width={20} height={20} />
                </a>
              ) : (
                <div
                  key={info.id}
                  className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={info.img} alt="icon" width={20} height={20} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
