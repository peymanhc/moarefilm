import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Rating from "../Rating";
import {
  Typography,
  Box,
  CardMedia,
  IconButton,
  Card,
} from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import default_image from "../../images/default_image.gif";
interface Props {
  star: number;
  title: string;
  img: string;
  describtion: string;
  doneicons: boolean;
  height: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    describtion: {
      padding: "15px",
      textShadow: "1px 1px 2px black",
      position: "relative",
      bottom: "0",
    },
    describtionbox: {
      position: "absolute",
      bottom: 0,
      left: "5%",
      right: "5%",
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        bottom: "auto",
        left: "auto",
        right: "auto",
      },
    },
    movieName: {
      paddingTop: 10,
      color: "#fff",
      textTransform: "capitalize",
      fontWeight: "bold",
      marginLeft: "15px",
      textShadow: "2px 1px 4px black",
    },
    movieImage: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundSize: "auto",
    },
    seen: {
      width: 100,
      height: 45,
      backgroundColor: "rgba(73,66,68,0.7)",
      position: "absolute",
      bottom: 0,
    },
    seenIcon: {
      color: "#fff",
    },
    faceIcon: {
      color: theme.palette.primary.main,
    },
  })
);

const Post = (props: Props) => {
  const classes = useStyles();

  return (
    <Card style={{ display: "flex",cursor:"pointer" }}>
      <CardMedia
        style={{ height: `${props.height}px`, backgroundSize: "cover" }}
        className={classes.movieImage}
        image={
          props.img !== "https://image.tmdb.org/t/p/w780null"
            ? props.img
            : default_image
        }
      >
        <Typography variant="h6" className={classes.movieName}>
          {props.title}
        </Typography>
        <Rating rating={true} star={props.star} />
        <Box className={classes.describtionbox}>
          <Typography className={classes.describtion}>
            {props.describtion}
          </Typography>
        </Box>
        <Box
          style={{ display: `${props.doneicons ? "block" : "none"}` }}
          className={classes.seen}
        >
          <IconButton className={classes.faceIcon}>
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
          <IconButton className={classes.seenIcon}>
            <DoneAllIcon />
          </IconButton>
        </Box>
      </CardMedia>
    </Card>
  );
};
export default Post;
