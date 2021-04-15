import React, { useState } from "react";
import {
  Button,
  Box,
  Theme,
  createStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FilterMobileSize from "../FilterMobileSize";
const lists = [
  {
    title: "All Geners",
    id: 1,
  },
  {
    title: "Horrors",
    id: 2,
  },
  {
    title: "Actions",
    id: 3,
  },
  {
    title: "Sciencs Fiction",
    id: 4,
  },
  {
    title: "Classic",
    id: 5,
  },
  {
    title: "Drama",
    id: 6,
  },
  {
    title: "Cemedy",
    id: 7,
  },
  {
    title: "thriller",
    id: 8,
  },
  {
    title: "Animation",
    id: 9,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapp: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "start",
        marginTop: 30,
      },
    },
    buttons: {
      display: "flex",
      padding: 3,
    },
    desktop: {
      display: "none",
      [theme.breakpoints.up(960)]: {
        display: "contents",
      },
    },
  })
);

const Categories = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState<number[]>([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Box style={{ display: "flex" }}>
      <Box className={classes.wrapp}>
        <Box className={classes.desktop}>
          {lists.map((item, value) => {
            return (
              <Box key={value} className={classes.buttons}>
                <Button
                  color="primary"
                  size="large"
                  onClick={handleToggle(value)}
                  variant={
                    checked.indexOf(value) !== -1 ? "contained" : "outlined"
                  }
                >
                  {item.title}
                </Button>
              </Box>
            );
          })}
        </Box>
        <FilterMobileSize>
          {lists.map((item, value) => {
            const labelId = `transfer-list-item-${value}-label`;
            return (
              <FormControlLabel
              key={value}
                onClick={handleToggle(value)}
                control={
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                }
                label={item.title}
              />
            );
          })}
        </FilterMobileSize>
      </Box>
    </Box>
  );
};

export default Categories;
