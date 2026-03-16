"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setDarkMode(stored === "true");
    } else {
      setDarkMode(!window.matchMedia("(prefers-color-scheme: light)").matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", String(!prev));
      return !prev;
    });
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <title>Quintin Mintiens</title>
        <meta name="description" content="Quintin Mintiens - Junior Data Engineer" />
        <meta name="theme-color" content={darkMode ? "#0a0a0f" : "#fafafa"} />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} font-sans ${
          mounted ? "" : "opacity-0"
        } transition-opacity duration-300 ${
          darkMode ? "bg-surface-900 text-gray-100" : "bg-light-50 text-gray-900"
        }`}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </body>
    </html>
  );
}
