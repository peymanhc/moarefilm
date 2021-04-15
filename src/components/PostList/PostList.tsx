import React from "react";
import { Link } from "react-router-dom";
import Post from "../Post";

interface Props {
  rate: number;
  title: string;
  image: string;
  describtion: string;
  link: any;
}

const PostList = (props: Props) => {
  return (
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
  );
};

export default PostList;
