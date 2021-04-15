import React from "react";
import Error from "../../components/Error";

interface Props {}

const ServerError = (props: Props) => {
  return <Error title="Error 500" message="Internal Server Error" />;
};

export default ServerError;
