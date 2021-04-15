import React from "react";
import { Box } from "@material-ui/core";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

interface Props {
  rate: number;
  title: string;
  image: string;
  describtion: string;
  link: any;
}
const PostsMobileSize = (props: Props) => {
  return (
    <Box style={{ paddingLeft: 15 }}>
      <Link style={{ textDecoration: "none" }} to={props.link}>
        <Post
          star={props.rate}
          title={props.title}
          img={props.image}
          describtion={props.describtion}
          doneicons={false}
          height={270}
        />
      </Link>
    </Box>
  );
};

export default PostsMobileSize;
