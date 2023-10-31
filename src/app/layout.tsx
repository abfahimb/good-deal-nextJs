import React from "react";
import type { Metadata } from "next";

import "./globals.css";
import FooterMain from "@/app/layout/footer/main";
import HeaderMain from "@/app/layout/header/main";

export const metadata: Metadata = {
  description: "opensource e-commerce nextjs project",
  keywords: [
    "opensource",
    "top nextjs",
    "projects",
    "e-commerce",
    "next.js",
    "reactjs",
    "react job",
    "opensource project",
  ],
  applicationName: "opensource e-commerce nextjs project",
  authors: {
    name: "abdullah al fahim",
    url: "https://abfahim.com/",
  },
  creator: "abdullah al fahim",
};

const RootLayout:React.FC<{  children: React.ReactNode;}> = ({children}) => {
  return (
      <html lang="en">
      <body>
      <HeaderMain />
      {children}
      <FooterMain />
      </body>
      </html>
  );
};

export default RootLayout;