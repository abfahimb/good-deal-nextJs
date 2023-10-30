import type { Metadata } from "next";

import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Ami head</header>
        {children}
        <footer>ami footer</footer>
      </body>
    </html>
  );
}
