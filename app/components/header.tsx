"use client";

import { usePathname } from "next/navigation";
import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = ({}) => {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "/about" : pathname;

  const navItems = [
    { name: "About", href: "/about" },
    { name: "My Works", href: "/my-works" },
    {
      name: "Lets talk",
      href: "mailto:stwumasi1290@gmail.com",
      external: true,
    },
  ];

  return (
    <header
      className={`w-full fixed transition-all flex items-center justify-between flex-row px-5 md:px-25 lg:px-70 z-50 ${
        false ? "blur-effect-theme" : "bg-[color:var(--color-scaffold-color)]"
      }`}
    >
      <Link href="/about" className="text-[2rem] cursor-pointer">
        Samuel
      </Link>
      <div className="flex gap-3 md:gap-5 text-[15px] md:text-[15px] transition-all lg:text-[18px]">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.name}
              href={item.href}
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
    </header>
  );
};

export default Header;
