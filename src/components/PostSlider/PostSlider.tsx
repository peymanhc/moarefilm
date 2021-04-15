import React from "react";
import { Box } from "@material-ui/core";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

const PostSlider = (props: any) => {
  const params = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    grabCursor: true,
  };
  return (
    <Box style={{ width: "96%" }}>
      <Swiper {...params}>{props.children}</Swiper>
    </Box>
  );
};

export default PostSlider;
