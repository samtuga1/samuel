"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Each icon is drawn as two four-point shapes with identical path commands, so
// framer-motion can interpolate the triangle's halves into the pause bars
// rather than swapping one icon for the other.
const icons = {
  play: {
    left: "M8 5 L13.5 8.5 L13.5 15.5 L8 19 Z",
    right: "M13.5 8.5 L19 12 L19 12 L13.5 15.5 Z",
  },
  pause: {
    // the round stroke paints ~1.6 outwards on every edge, so the bars sit wide
    // of centre to leave a visible gap once that is added back on
    left: "M6 5 L9 5 L9 19 L6 19 Z",
    right: "M15 5 L18 5 L18 19 L15 19 Z",
  },
};

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // let the audio element drive the state so the icon can't drift out of sync
  // with what is actually playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const sync = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("ended", sync);

    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("ended", sync);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // play() rejects if the browser blocks playback
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  };

  const icon = isPlaying ? icons.pause : icons.play;
  const transition = { duration: 0.3, ease: "easeInOut" as const };

  return (
    <>
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        aria-pressed={isPlaying}
        className="shrink-0 flex items-center justify-center cursor-pointer w-[34px] h-[34px] md:w-[40px] md:h-[40px] text-[color:var(--color-primary-color)] transition-transform duration-300 hover:scale-110"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="currentColor"
          // stroking each shape in its own fill colour with a round join is what
          // softens the corners of the triangle and the bars
          stroke="currentColor"
          strokeWidth={3.2}
          strokeLinejoin="round"
          strokeLinecap="round"
          className="w-[21px] h-[21px] md:w-[25px] md:h-[25px]"
          animate={{ x: isPlaying ? 0 : 0.5 }}
          transition={transition}
        >
          <motion.path
            initial={false}
            animate={{ d: icon.left }}
            transition={transition}
          />
          <motion.path
            initial={false}
            animate={{ d: icon.right }}
            transition={transition}
          />
        </motion.svg>
      </button>
      <audio ref={audioRef} src="/girl-on-fire.mp3" preload="none" />
    </>
  );
};

export default MusicToggle;
