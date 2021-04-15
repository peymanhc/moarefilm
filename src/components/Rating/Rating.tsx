import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";
interface Props {
  rating: boolean;
  star: number;
}

export default function SimpleRating(props: Props) {
  // eslint-disable-next-line
  const [value, setValue] = useState<number | null>(0);

  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating
        readOnly={props.rating}
        name="simple-controlled"
        emptyIcon={
          <StarBorderIcon style={{ color: "#ffb400" }} fontSize="inherit" />
        }
        precision={0.5}
        value={props.star}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
