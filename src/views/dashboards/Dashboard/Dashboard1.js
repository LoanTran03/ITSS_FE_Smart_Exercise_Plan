import React from "react";
import { Grid, Box } from "@mui/material";

import {
  DBHeader,
  Excercise,
  MenuForLunch,
} from "./dashboard1-components";

const Dashboard1 = () => {
  // 2

  return (
    
    <Box>
      <Grid container spacing={5}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12} >
          <DBHeader />
        </Grid>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid item xs={12} lg={6}>
          <Excercise />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MenuForLunch />
        </Grid>
        {/* ------------------------- row 3 ------------------------- */}
        {/* <BlogCard /> */}
      </Grid>
    </Box>
  );
};

export default Dashboard1;
