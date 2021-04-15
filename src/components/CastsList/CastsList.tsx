import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Theme } from "@material-ui/core";
import Slider from "../Slider/Slider";

const useStyles = makeStyles((theme: Theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
  },
  mobile: {
    display: "flex",
    marginTop: "15px",
    marginLeft: "-10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

interface Props {
  Creators?: String[]
}

const CastsList:React.FC<Props> = ({Creators}) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: "50px" }}>
        Cast
      </Typography>
      <Box className={classes.desktop}>
        <Slider Creators={Creators}/>
      </Box>
    </Box>
  );
};

export default CastsList;
