"use client";

import { motion } from "framer-motion";

export default function Signature() {
  return (
    // <svg
    //   width="600"
    //   height="150"
    //   viewBox="0 0 600 150"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <motion.text
    //     x="50"
    //     y="100"
    //     className="signature-stroke text-black"
    //     style={{
    //       fontFamily: "SignatureFont",
    //       fontSize: "60px",
    //     }}
    //     initial={{ pathLength: 0 }}
    //     animate={{ pathLength: 1 }}
    //     transition={{
    //       duration: 2,
    //       ease: "easeInOut",
    //     }}
    //   >
    //     Samuel Twumasi
    //   </motion.text>
    // </svg>

    <motion.svg>
      <motion.path
        d="M43.5,85.2c12.1-21.7,37.3-33.9,59.6-28.2c11.3,2.9,22.6,11.7,32.3,22.9c9.6,11.2,19.3,25.1,29,39.1
  c4.7,6.9,9.4,13.9,14.1,20.2c3.9,5.2,7.9,10.2,11.8,14.5"
        stroke="black"
        strokeWidth={2}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
