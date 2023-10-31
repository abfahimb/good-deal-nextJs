import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Good Deal",
};

const HomePage: React.FC = () => {
  return <main className="min-page-height">this is home page</main>;
};

export default HomePage;
