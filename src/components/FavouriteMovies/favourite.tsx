import React from "react";
import { Grid } from "@material-ui/core";
import Post from "../Post";

interface Props {
  rate: number;
  title: string;
  image: string;
  describtion: string;
  hight: number;
}

const Favourite = (props: Props) => {
  return (
    <Grid item={true} md={4} xs={12}>
      <Post
        star={props.rate}
        title={props.title}
        img={props.image}
        describtion={props.describtion}
        doneicons={true}
        height={270}
      />
    </Grid>
  );
};

export default Favourite;
