"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-[80px]">
          <AnimatePresence mode="wait" initial={false}>
            <div key={pathname}>{children}</div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}
