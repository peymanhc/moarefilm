import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

interface Props {
  title: string;
  message: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      height: "50vh",
      marginTop: "10%",
      color: theme.palette.primary.main,
      width: 300,
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        width: 500,
      },
    },
    title: {
      fontSize: 40,
      margin: "10% auto",
      color: "#fff",
      textAlign: "center",
      width: 400,
      fontWeight: "bold",
    },
  })
);

const Error = (props: Props) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.title}>
        <Typography variant="h1">{props.title}</Typography>
        <Typography variant="h4">{props.message}</Typography>
      </Box>
    </Box>
  );
};
export default Error;
