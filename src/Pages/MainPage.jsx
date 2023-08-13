import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Assignment } from "../Components/Assignment";
import { MobileNavbar } from "../Components/MobileNavbar";
import { Navbar } from "../Components/Navbar";
import { Overview } from "../Components/Overview";
import { SideBar } from "../Components/SideBar";

export const MainPage = () => {
  const [desktopView] = useMediaQuery("(min-width: 960px)");

  const [showOverView, setShowOverView] = useState(desktopView);

  useEffect(() => {
    setShowOverView(desktopView);
  }, [desktopView]);

  const handleVisibility = () => {
    setShowOverView(!showOverView);
  };

  return (
    <Flex justifyContent="space-between" pr="20px" h="100vh">
      <SideBar />
      <Box
        w={{ base: "100%", md: "83%", lg: "88%" }}
        position="absolute"
        left={{ base: "0", md: "16%", lg: "11%" }}
      >
        <MobileNavbar />
        <Navbar />
        {showOverView && <Overview />}
        <Assignment handleVisibility={handleVisibility} />
      </Box>
    </Flex>
  );
};
