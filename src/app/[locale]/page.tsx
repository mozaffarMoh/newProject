"use client";
import type { NextPage } from "next";
import { Footer, Header, HeroSection } from "@/sections";
import { Box, Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <>
      <Box>
        <Typography>Welcome to New Project</Typography>
      </Box>
      {/*   <Header />
      <HeroSection />
      <Footer /> */}
    </>
  );
};

export default HomePage;
