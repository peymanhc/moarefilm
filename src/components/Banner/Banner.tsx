import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@material-ui/core";

interface Props {
  title: string;
  Subtext: any;
  button: string;
  link: string;
  img: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Header: {
      backgroundColor: "#fff",
      backgroundRepeat: "no-repeat !important",
      backgroundSize: "cover !important",
      margin: "auto",
      width: "100%",
      backgroundPosition: "0px 0px",
      height: 414,
      [theme.breakpoints.up("md")]: {
        height: 414,
        backgroundPosition: "0px -190px",
      },
    },
    Headerimg: {
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.7469188358937324) 0%, rgba(0,0,0,0.4275911048012955) 56%, rgba(22,8,8,0.5760504885547969) 77%);",
      width: "100%",
      height: 414,
      objectFit: "cover",
      [theme.breakpoints.up("md")]: {
        height: 414,
      },
    },
    description:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: 400,
    },
    Title: {
      color: "#fff",
      width: 300,
      fontSize: 20,
      [theme.breakpoints.up("md")]: {
        fontSize: 30,
        width: "auto",
      },
    },
    Subtext: {
      marginBottom: "20px",
      textAlign: "center",
      color: "gray",
      height: "30px",
      fontSize: 25,
    },
    joinusbanner: {
      width: 250,
      textAlign: "left",
      margin: "auto !important",
      paddingTop:100,
      [theme.breakpoints.up("md")]: {
        width: 600,
        textAlign: "left",
        marginLeft: "150px !important",
      },
    },
  })
);
const Banner = (props: Props) => {
  const classes = useStyles();

  return (
    <Box style={{ background: `url(${props.img})` }} className={classes.Header}>
      <Box className={classes.Headerimg}>
        <Box>
          {props.button === "Join Us For Free" ? (
            <Box  className={classes.joinusbanner}>
              <Typography variant="h3" className={classes.Title}>
                {props.title}
              </Typography>
              <Typography variant="h4" className={classes.Subtext}>
                {props.Subtext}
              </Typography>

              <Button
                style={{ float: "left" }}
                color="primary"
                size="large"
                variant="contained"
              >
                <Link
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  to={props.link}
                >
                  {props.button}
                </Link>
              </Button>
            </Box>
          ) : (
            <Box className={classes.description} style={{ textAlign: "center" }}>
              <Typography variant="h3" className={classes.Title}>
                {props.title}
              </Typography>
              <Typography variant="h4" className={classes.Subtext}>
                {props.Subtext}
              </Typography>
              <Button color="primary" size="large" variant="contained">
                <Link
                  style={{
                    margin: "auto",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  to={props.link}
                >
                  {props.button}
                </Link>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
