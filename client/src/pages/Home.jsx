import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} paddingTop={"2rem"}>
        Select a Friend to chat with
      </Typography>
    </Box>
  );
}

export default AppLayout()(Home);
