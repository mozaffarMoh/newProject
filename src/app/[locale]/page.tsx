"use client";
import type { NextPage } from "next";
import { Footer, Header, HeroSection } from "@/sections";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage: NextPage = () => {
  const [isCsr, setIsCsr] = useState(false);

  useEffect(() => {
    !isCsr && setIsCsr(true);
  }, [isCsr]);

  return (
    isCsr && (
      <>
        <Header />
        <HeroSection />
        <Footer />
      </>
    )
  );
};

export default HomePage;
