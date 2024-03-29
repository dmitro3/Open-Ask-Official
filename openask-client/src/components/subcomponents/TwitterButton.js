import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const TwitterButton = ({ signInTwitter }) => {
  return (
    <Box className="twitter-btn" onClick={() => signInTwitter(true)}>
      <TwitterIcon fontSize="large" />
      <Typography>Sign In</Typography>
    </Box>
  );
};

export default TwitterButton;
