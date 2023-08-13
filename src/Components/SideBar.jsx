import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import assessment from "../Icons/assessment.svg";
import dashboard from "../Icons/dashboard.svg";
import mylibrary from "../Icons/mylibrary.svg";
import roundstatus from "../Icons/roundstatus.svg";

export const SideBar = () => {
  return (
    <Box
      position="fixed"
      zIndex="10"
      top="0"
      bgColor="white"
      w={{ base: "15%", md: "15%", lg: "10%" }}
      h="100vh"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Grid gap="10px" p="10px 20px " fontSize={"13px"} fontWeight={"500"}>
        <Box p="10px">
          <Image
            src={dashboard}
            alt="dashboard"
            margin={"auto"}
            width="25px"
            height="25px"
          />
          <Text>Dashboard</Text>
        </Box>

        <Box
          p="10px 0px"
          width={"90px"}
          borderRadius={"10px"}
          bgColor="#E5F1FC"
          border="2px solid #4096EC"
          color={"#4096EC"}
          margin={"auto"}
        >
          <Image
            src={assessment}
            alt="assessment"
            margin={"auto"}
            width="25px"
            height="25px"
          />
          <Text>Assessment</Text>
        </Box>

        <Box p="10px">
          <Image
            src={mylibrary}
            alt="mylibrary"
            margin={"auto"}
            width="25px"
            height="25px"
          />
          <Text>My Library</Text>
        </Box>

        <Box p="15px" borderTop={"1px dotted #E3E5E8"} mt="10px">
          <Button
            fontSize={"10px"}
            w="46px"
            h="18px"
            textAlign={"center"}
            alignItems={"center"}
            display={"block"}
            fontWeight={"500"}
            p="0px 4px"
            m={"auto"}
            border-radius="22px"
            border="1px solid var(--accent-new-red, #D63500)"
            background="var(--accent-red-light, #FBEBEA)"
            color="var(--accent-new-red, #D63500)"
          >
            Admin
          </Button>
        </Box>

        <Box p="10px">
          <Image
            src={roundstatus}
            alt="roundstatus"
            margin={"auto"}
            width="25px"
            height="25px"
          />
          <Text>Round </Text>
          <Text>Status</Text>
        </Box>
      </Grid>
    </Box>
  );
};
