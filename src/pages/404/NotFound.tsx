import React from "react";
import Error from "../../components/Error";

interface Props {}

const NotFound = (props: Props) => {
  return (
    <Error title="Error 404" message="Looks Like This Page Does Not Exist" />
  );
};

export default NotFound;
