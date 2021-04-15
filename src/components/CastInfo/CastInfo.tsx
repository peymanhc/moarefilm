import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import CastInfoMobile from "../CastInfoMobile/CastInfoMobile";

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
  gender: number;
  birthDay: string;
  deathDay: string;
  knownFor: string;
}

const CastInfo: React.FC<Props> = ({
  gender,
  birthDay,
  deathDay,
  knownFor,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.desktop}>
        <Box className={classes.movieInfo}>
          <Box className={classes.creators}>
            <Typography variant="h4">Gender</Typography>
            <Typography>{gender === 1 ? "female" : "male"}</Typography>
          </Box>
          <Box className={classes.creators}>
            <Typography variant="h4">Birth Day</Typography>
            <Typography>{birthDay}</Typography>
          </Box>
          {deathDay === null ? null : (
            <Box className={classes.creators}>
              <Typography variant="h4">Death Day</Typography>
              <Typography>{deathDay}</Typography>
            </Box>
          )}
          <Box className={classes.creators}>
            <Typography variant="h4">Known For</Typography>
            <Typography>{knownFor}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.mobile}>
        <CastInfoMobile
          gender={gender}
          birthDay={birthDay}
          deathDay={deathDay}
          knownFor={knownFor}
        />
      </Box>
    </>
  );
};

export default CastInfo;
