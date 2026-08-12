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
      {/* extensions such as Grammarly inject attributes here before React
          hydrates, which otherwise reads as a mismatch */}
      <body suppressHydrationWarning>
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
