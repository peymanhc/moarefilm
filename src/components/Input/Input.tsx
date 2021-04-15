import React, { useState } from "react";
import {
  Box,
  InputBase,
  makeStyles,
  Theme,
  IconButton,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";

interface Text {
  name: string;
  inputref: any;
}
interface Password {
  Password: string;
  inputref: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
    display: "flex",
    margin: "8px 0",
    width: "100%",
    background: "#564E4C",
  },
  inputFeild: {
    padding: 10,
    height: 40,
    color: "#white",
  },
  eyeicon: {
    color: "#95918F",
    width: 50,
    height: 40,
  },
}));

export const Password = (props: Password) => {
  const classes = useStyles();
  const [Password, SetPassword] = useState<string>("password");
  const passwordtoggle = () => {
    SetPassword(Password === "text" ? "password" : "text");
  };
  return (
    <Box className={classes.root}>
      <InputBase
        autoComplete="new-password"
        inputRef={props.inputref}
        className={classes.inputFeild}
        color="secondary"
        name={props.Password}
        placeholder={props.Password}
        type={Password}
        fullWidth
      />
      {Password === "text" ? (
        <IconButton className={classes.eyeicon} onClick={passwordtoggle}>
          <VisibilityOff />
        </IconButton>
      ) : (
        <IconButton className={classes.eyeicon} onClick={passwordtoggle}>
          <Visibility />
        </IconButton>
      )}
    </Box>
  );
};

export const Input = (props: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InputBase
        name={props.name}
        inputRef={props.inputref}
        className={classes.inputFeild}
        color="secondary"
        placeholder={props.name}
        type="text"
        fullWidth
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
};
