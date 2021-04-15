import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Box, InputBase } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
interface Props {
  title: string;
  Subtext: string;
  img: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Header: {
      margin: "auto",
      width: "100%",
      height: 400,
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
    Headerimg: {
      background:
        "linear-gradient(90deg, rgba(23,19,51,0.7357143541010154) 0%, rgba(10,0,0,0.8421569311318278) 33%, rgba(57,0,0,0.5172269591430323) 73%);",
      width: "100%",
      height: 400,
      objectFit: "cover",
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
    Title: {
      textAlign: "center",
    },
    editIcon: {
      float: "right",
      color: theme.palette.primary.main,
      border: "none",
      backgroundColor: "transparent",
      width: 30,
      height: 30,
      margin: 20,
      cursor: "pointer",
    },
    headbutton: {
      display: "flex",
      margin: "50px auto",
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
      },
    },
    headertitle: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        height: 400,
      },
    },
    editIconBox: {
      position: "relative",
      [theme.breakpoints.down(960)]: {
        top: "80%",
      },
    },
    "@global": {
      ".MuiInputBase-input": {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        border: "none",
      },
    },
  })
);
const Banner = (props: Props) => {
  const classes = useStyles();
  const [editProfile, seteditProfile] = useState(true);
  const [name, setname] = useState<any>();
  const EditHandler = () => {
    seteditProfile(!editProfile);
  };
  const onLogOut = () => {
    localStorage.removeItem("session_id");
    window.location.href = "https://localhost:3000";
  };
  return (
    <Box style={{ background: `url(${props.img})` }} className={classes.Header}>
      <Box className={classes.Headerimg}>
        <Box className={classes.editIconBox}>
          <Button onClick={EditHandler} className={classes.editIcon}>
            {editProfile ? <EditIcon /> : <DoneIcon />}
          </Button>
        </Box>
        <Box className={classes.headertitle}>
          <InputBase
            disabled={editProfile}
            value={name}
            onChange={(e) => setname(e.target.value)}
            defaultValue={"Peymanhc"}
          />
          {editProfile ? (
            <Button
              className={classes.headbutton}
              color="primary"
              size="large"
              onClick={onLogOut}
              variant="contained"
            >
              Log Out
            </Button>
          ) : (
            <Button
              className={classes.headbutton}
              color="primary"
              size="large"
              variant="contained"
            >
              Select Background
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
