/* eslint-disable react/no-unescaped-entities */
"use client";
import { NextPage } from "next";
import socials from "../utils/socials";
import ArrowIcon from "../assets/images/top-arrow.svg";
import Image from "next/image";

// interface Props {}

const Footer: NextPage = ({}) => {
  return (
    <div className="bg-black text-white md:px-25 lg:px-70 transition-all px-5 pt-15 mt-15">
      <span className="text-2xl">
        Feel free to reach out, let's talk about engineering, product, open
        source or anything technology 😎
      </span>
      <div className="grid md:grid-cols-3 mt-10 md:mt-15 gap-x-10 pb-20 w-full">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between cursor-pointer hover:scale-105 transition">
                <span className="text-2xl">{social.name}</span>
                <Image
                  src={ArrowIcon.src}
                  alt="ArrowIcon"
                  width={ArrowIcon.width}
                  height={ArrowIcon.height}
                />
              </div>
              <div className="h-px bg-[#3E3E3E] my-4" />{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
