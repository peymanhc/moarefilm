import React from "react";
import { Drawer, Box } from "@material-ui/core";
interface Props {
  open: any;
  children: any;
}

const MobileNavbar = (props: Props) => {
  return (
    <Box style={{ background: "black" }}>
      <Drawer style={{ opacity: 0.9 }} anchor="right" open={props.open}>
        {props.children}
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
