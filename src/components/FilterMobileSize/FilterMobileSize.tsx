import React, { useState } from "react";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  Typography,
  IconButton,
  Theme,
  createStyles,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    close: {
      color: "#fff",
      width: 80,
      height: 60,
      float: "right",
    },
    filterbox: {
      width: "100%",
      height: "70px",
      display: "flex",
    },
    filtericon: {
      color: theme.palette.primary.main,
      width: 30,
      height: 30,
    },
    filtertxt: {
      marginLeft: 10,
      fontSize: 16,
    },
    filter: {
      marginTop: "8vh",
      fontSize: 20,
      display: "flex",
      padding: "20px 40px",
    },
    checkboxes: {
      display: "grid",
      padding: "0 40px",
    },
  })
);

const FilterMobileSize = (props:any) => {
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = useState(false);
 
  const toggleDrawer = (value: any) => {
    setdrawerOpen(value);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.filterbox}>
        <Button onClick={() => toggleDrawer(true)}>
          <FilterListIcon className={classes.filtericon} />
          <Typography variant="h6" className={classes.filtertxt}>
            {props.filterName}
          </Typography>
        </Button>
      </Box>
      <MobileNavbar open={drawerOpen}>
        <Box style={{ width: "100vw", height: "500vw", background: "#524a48" }}>
          <IconButton
            onClick={() => toggleDrawer(false)}
            className={classes.close}
          >
            <CloseIcon style={{ width: 40, height: 40 }} />
          </IconButton>
          <Box className={classes.filter}>
            <Typography variant="h6">Filters</Typography>
          </Box>
          <Box className={classes.checkboxes}>
              {props.children}
          </Box>
        </Box>
      </MobileNavbar>
    </Box>
  );
};

export default FilterMobileSize;
