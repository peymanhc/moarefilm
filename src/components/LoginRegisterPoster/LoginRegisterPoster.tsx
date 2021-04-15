import React, { FC } from "react";
import { Typography, createStyles, Theme, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface PosterProps {
  img: string;
  title: any;
  subTitle?: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Header: {
      width: "80%",
      height: 300,
      [theme.breakpoints.up("md")]: {
        height: 400,
        backgroundPosition: "-10vh !important",
      },
    },
    Headerimg: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.4) 51%, rgba(0,0,0,0.5) 95%);",
      width: "100%",
      height: 300,
      objectFit: "cover",
      [theme.breakpoints.up("md")]: {
        height: 400,
      },
    },
    text: {
      width: "80%",
      textAlign: "left",
      padding: "3rem 4rem 0",
    },
  })
);
const LoginRegisterPoster: FC<PosterProps> = ({ img, title, subTitle }) => {
  const classes = useStyles();

  return (
    <Box
      style={{ background: `url(${img})no-repeat`, backgroundSize: "cover" }}
      className={classes.Header}
    >
      <Box className={classes.Headerimg}>
        <Box className={classes.text}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">{subTitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginRegisterPoster;
