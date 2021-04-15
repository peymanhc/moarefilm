import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Button,
  Box,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import logo from "../../images/img27.jpg";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import FilterMobileSize from "../../components/FilterMobileSize";
import Post from "../../components/Post";
const lists = [
  {
    title: "Movies",
    id: 1,
  },
  {
    title: "TV Series",
    id: 2,
  },
  {
    title: "People",
    id: 3,
  },
  {
    title: "Genres",
    id: 4,
  },
];
/// hello
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tabsContainer: {
      width: " 100%",
      display: "none",
      justifyContent: "space-between",
      marginBottom: "1rem",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    contentWrapper: {
      width: 900,
      padding: "0 15px",
      margin: "15px auto",
    },
    bottomtabs: {
      display: "none",
      justifyContent: "space-between",
      width: "40%",
      marginTop: 20,
      height: 40,
      float: "right",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    arrowButtons: {
      width: 110,
      fontSize: 14,
      borderRadius: 7,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "red",
      },
    },
    happyIcon: {
      color: "#00ff00",
      "&:hover": {
        color: "green",
      },
    },
    sadIcon: {
      color: "#ff0000",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

const WhatYouLike = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState<number[]>([]);

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
    <Box className={classes.root} flex={1}>
      <Box className={classes.content}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.tabsContainer}>
            {lists.map((item, value) => {
              return (
                <Button
                  key={value}
                  color="primary"
                  size="large"
                  onClick={handleToggle(value)}
                  variant={
                    checked.indexOf(value) !== -1 ? "contained" : "outlined"
                  }
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>
          <FilterMobileSize filterName="Filters">
            {lists.map((item, value) => {
              const labelId = `transfer-list-item-${value}-label`;
              return (
                <FormControlLabel
                  onClick={handleToggle(value)}
                  key={value}
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
          <Post
            star={5}
            title={"A quiet place part II"}
            img={logo}
            describtion={
              " Lorem ipsum dolor sit, amet peyma consectetur adipisicing elit Neque molestias quis, sit perspiciatis atque facere nam! Ealaboriosam ratione voluptatem esse quibusdam, dolor at labore optio itaque omnis. Cum, consectetur"
            }
            doneicons={false}
            height={450}
          />
          <Box className={classes.bottomtabs}>
            <IconButton>
              <SentimentVeryDissatisfiedIcon
                fontSize="large"
                className={classes.sadIcon}
              />
            </IconButton>
            <IconButton>
              <EmojiEmotionsIcon
                fontSize="large"
                className={classes.happyIcon}
              />
            </IconButton>
            <Button color="primary" size="small" variant="contained">
              Previous
            </Button>
            <Button color="primary" size="small" variant="contained">
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatYouLike;
