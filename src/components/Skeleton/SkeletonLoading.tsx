import React from "react";
import Box from "@material-ui/core/Box/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoading = () => {
  return (
    <Box>
      <Skeleton variant="rect" width={"100%"} height={450} />
      <Box
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="text" width={200} height={25} />
        <Skeleton variant="rect" width={200} height={35} />
      </Box>
      <Box style={{display:"flex", flexDirection:"row", marginTop:"10px"}}>
        <Box style={{flex:1}}>
          <Skeleton variant="rect" width={"100%"} height={250} />
        </Box>
        <Box style={{flex:1 , padding:"0px 10px"}}>
          <Skeleton variant="rect" width={"100%"} height={250} />
        </Box>
        <Box style={{flex:1 }}>
          <Skeleton variant="rect" width={"100%"} height={250} />
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonLoading;