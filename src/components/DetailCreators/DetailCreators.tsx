import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
//components
// import CreatorsCard from "../DetailCreatorsCard/DetailCreatorsCard";
import CreatorsMobile from "../CreatorsDetailMobile/CreatorsDetailMobile";

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  movieInfo: {
    backgroundColor: "#7d0000",
    width: "100%",
    height: "350px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    flexWrap: "wrap",
    fontSize: "5px",
  },
  creators: {
    display: "flex",
    flexDirection: "column",
    padding: "25px",
    height: 150,
    textAlign: "center",
  },
}));

interface Props {
  runTime?: number;
  releaseDate?: string;
  Director?: any;
  writer: any;
  title:string
}

const DetailCreators: React.FC<Props> = ({
  runTime,
  releaseDate,
  Director,
  writer,
  title,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.desktop}>
        <Box className={classes.movieInfo}>
          <Box className={classes.creators}>
            <Typography variant="h4">Director</Typography>
            <Typography>{Director}</Typography>
          </Box>
          <Box className={classes.creators}>
            <Typography variant="h4">{title}</Typography>
            <Typography>{writer}</Typography>
          </Box>
          <Box className={classes.creators}>
            <Typography variant="h4">Runtime</Typography>
            <Typography>{runTime} min</Typography>
          </Box>
          <Box className={classes.creators}>
            <Typography variant="h4">Release Date</Typography>
            <Typography>{releaseDate}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.mobile}>
        <CreatorsMobile
          runTime={runTime}
          releaseDate={releaseDate}
          Director={Director}
          writer={writer}
        />
      </Box>
    </>
  );
};

export default DetailCreators;
