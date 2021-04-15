import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerText: {
      fontSize: 25,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20
      },
    },
    icon: {
      fontSize: 35,
      color: "#ff0000",
      margin: "0 10px",
      height: "50px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 25
      },
    },
  })
);
const Footer = (props: any) => {
  const classes = useStyles();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <Typography className={classes.footerText}>With</Typography>
      <FavoriteIcon className={classes.icon} />
      <Typography className={classes.footerText}>From MoareFilm</Typography>
    </Box>
  );
};

export default Footer;
