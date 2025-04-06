import { Grid } from "@mui/material";
import React from "react";

function Group() {
  return (
    <Grid container height={"100vh"}>
      <Grid size={{ sm: 4 }} sx={{ display: { xs: "none", sm: "block" } }}>
        Group List
      </Grid>
      <Grid size={{xs: 12, sm: 8}} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "1rem 3rem",
        position: "relative"
      }}>Group Details</Grid>
    </Grid>
  );
}

export default Group;
