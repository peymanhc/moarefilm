import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  creators: {
    display: "flex",
    flexDirection: "column",
    padding: "25px",
    textAlign:"center"
  },
}));

const DetailCreatorsCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.creators}>
      <Typography variant="h4">Director</Typography>
      <Typography>Farid Shariati</Typography>
    </Box>
  );
};

export default DetailCreatorsCard;
