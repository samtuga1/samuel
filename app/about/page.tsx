/* eslint-disable react/no-unescaped-entities */
"use client";

import { NextPage } from "next";
import SamuelImage from "../assets/images/me.jpg";
import UrbanBlu from "../assets/images/urban-blu.svg";
import Safelynk from "../assets/images/safelynk.svg";
import Viibre from "../assets/images/viibre.svg";
import ViuHealth from "../assets/images/viuhealth.svg";
import Mova from "../assets/images/mova.svg";
import Hanypay from "../assets/images/hanypay.svg";
// import Signature from "../assets/images/nick-sign.svg";
import Signature from "../assets/images/samuel-sign.png";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useOnScreen } from "@/hooks/visible-hook";
// import Signature from "../components/signature";

// interface Props {}

const logos = [UrbanBlu, Safelynk, Viibre, ViuHealth, Mova, Hanypay];
// repeated so a single half is always wider than the viewport
const half = [...logos, ...logos];

const About: NextPage = ({}) => {
  // const [ref, visible] = useOnScreen();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-5 pt-10 flex flex-col gap-2 md:px-25 lg:px-70 transition-all">
        <Image
          className="w-[97px] h-[97px] object-cover object-top rounded-4xl md:w-[130px] md:h-[130px] transition-all"
          src={SamuelImage.src}
          alt="Samuel.png"
          width={SamuelImage.width}
          height={SamuelImage.height}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-normal md:font-medium text-3xl md:w-[400px] md:text-4xl">
              Hey, I'm Samuel Twumasi
            </span>
            <span className="font-normal md:font-medium text-3xl md:w-[400px] md:text-4xl">
              Software Engineer
            </span>
          </div>
          <span className="font-[Inter] font-light">
            I’m a full-stack software engineer passionate about turning ideas
            into scalable, real-world products. I’ve built and shipped
            applications across E-commerce, Healthcare, FinTech, Mobility, and
            SaaS, working across web, mobile, and backend systems.
          </span>
          <span className="font-[Inter] font-light">
            I enjoy solving complex problems from real-time communication and
            location tracking to payments, multi-tenant architecture, and
            scalable backend infrastructure. My goal is simple: build software
            that is technically solid, intuitive to use, and genuinely useful.
          </span>
        </div>
        <span className="text-[color:var(--color-primary-color)] pt-6 pb-1">
          I've worked for
        </span>
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[color:var(--color-scaffold-color)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[color:var(--color-scaffold-color)] to-transparent z-10" />

          <div className="overflow-x-hidden relative w-full">
            <div className="flex animate-marquee flex-row w-max whitespace-nowrap">
              {/* two identical halves so translateX(-50%) loops seamlessly */}
              {[0, 1, 2, 3].map((copy) => (
                <div
                  key={copy}
                  className="flex flex-row shrink-0 items-center"
                  aria-hidden={copy === 1}
                >
                  {half.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt="image"
                      className="h-[25px] md:h-[30px] w-auto mr-[15px] transition"
                      width={image.width}
                      height={image.height}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10 mt-5 md:mt-20 transition-all">
          <Image
            src={Signature.src}
            alt="image"
            className="w-[190px] transition scale-60 pt-8"
            width={Signature.width}
            height={Signature.height}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
