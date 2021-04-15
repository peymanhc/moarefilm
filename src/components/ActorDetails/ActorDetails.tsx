import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles, Grid, Box } from "@material-ui/core";

interface Props {
  age?: number;
  gender?: string;
  birthDay?: string;
  DeathDay?: string;
  KnownFor?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop:"50px",
      minheight: 300,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    detailtext: {
      padding: "20px",
      margin: "100px auto",
      width: "230px",
      textAlign: "center",
      color: "#fff",
      fontSize: 35,
    },
    grid: {
      display: "contents",
      width: "100%",
    },
  })
);

const ActorDetails = (props: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        className={classes.grid}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item md={2}>
          <Box className={classes.detailtext}>
            <h4 style={{ fontWeight: "bold" }}>Age</h4>
            <small>{props.age} years Old</small>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box className={classes.detailtext}>
            <h4 style={{ fontWeight: "bold" }}>Gender</h4>
            <small>{props.gender}</small>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box className={classes.detailtext}>
            <h4 style={{ fontWeight: "bold" }}>Birth Day</h4>
            <small>{props.birthDay}</small>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box className={classes.detailtext}>
            <h4 style={{ fontWeight: "bold" }}>Death Day</h4>
            <small>{props.DeathDay}</small>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box className={classes.detailtext}>
            <h4 style={{ fontWeight: "bold" }}>Known For</h4>
            <small>{props.KnownFor}</small>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActorDetails;
