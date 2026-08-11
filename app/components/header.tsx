"use client";

import { usePathname } from "next/navigation";
import { NextPage } from "next";
import Link from "next/link";
import MusicToggle from "./music-toggle";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "/about" },
  { name: "My Works", href: "/my-works" },
  { name: "Resume", href: "/resume.pdf", external: true, newTab: true },
  {
    name: "Lets talk",
    href: "mailto:stwumasi1290@gmail.com",
    external: true,
  },
];

// the panel fades as a whole, then hands off to the children so each link
// rises into place one after the other
const panelVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
};

const Header: NextPage = ({}) => {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "/about" : pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  // close the menu whenever navigation actually happens
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`w-full fixed transition-all flex items-center justify-between flex-row px-5 md:px-25 lg:px-70 z-50 ${
        false ? "blur-effect-theme" : "bg-[color:var(--color-scaffold-color)]"
      }`}
    >
      <Link href="/about" className="text-[2rem] cursor-pointer">
        <div className="flex items-end">
          <span>Sa</span>
          <div className="w-[7px] h-[7px] bg-[color:var(--color-primary-color)] -translate-y-[11.5px] translate-x-[1px]" />
        </div>
      </Link>

      <div className="flex items-center gap-3 md:gap-5 text-[13px] md:text-[13px] transition-all lg:text-[16px]">
        <div className="hidden md:flex items-center gap-3 md:gap-5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target={item.newTab ? "_blank" : undefined}
                rel={item.newTab ? "noopener noreferrer" : undefined}
                className="transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  currentPath === item.href
                    ? "text-[color:var(--color-primary-color)]"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center gap-[6px] w-[34px] h-[34px] cursor-pointer shrink-0"
        >
          {/* two bars that rotate into an X, so the icon reads as a close
              control while the menu is open */}
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 3.75 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-[21px] h-[1.8px] bg-current origin-center"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -3.75 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-[21px] h-[1.5px] bg-current origin-center"
          />
        </button>

        <MusicToggle />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            // sits directly under the bar and fades out into the page rather
            // than ending on a hard edge
            className="md:hidden absolute top-full left-0 w-full px-5 pt-8 pb-32 flex flex-col gap-7 bg-gradient-to-b from-[color:var(--color-scaffold-color)] via-[color:var(--color-scaffold-color)] to-transparent"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={linkVariants}>
                {item.external ? (
                  <a
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl transition-colors duration-300 ${
                      currentPath === item.href
                        ? "text-[color:var(--color-primary-color)]"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
