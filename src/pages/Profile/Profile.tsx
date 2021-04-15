import React, { ReactElement, useEffect } from "react";
import ProfileImg from "../../images/img19.jpg";
import { makeStyles } from "@material-ui/styles";
import Categories from "../../components/Categories";
import Favourite from "../../components/FavouriteMovies";
import { Box, Typography, Theme, createStyles, Grid } from "@material-ui/core";
import ProfileHeader from "../../components/ProfileHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorates } from "../../Redux/Actions/Favorate";
import { fetchRated } from "../../Redux/Actions/RatedVideos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: "30px 0px",
      [theme.breakpoints.down(960)]: {
        fontSize: "18px",
      },
    },
    titleBox: {
      [theme.breakpoints.down(960)]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    items: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "auto",
      marginTop: 20,
    },
    mainItems: {
      [theme.breakpoints.down(960)]: {
        padding: "30px",
      },
    },
  })
);

function Profile(): ReactElement {
  const classes = useStyles();
  const Account = useSelector((state: any) => state.Account);
  const dispatch = useDispatch();
  const RatedMovies = useSelector((state:any) => state.RatedMovies )
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  useEffect(() => {
    dispatch(fetchFavorates());
    dispatch(fetchRated());
    // eslint-disable-next-line
  }, []);
  return (
    <Box>
      <ProfileHeader
        title={Account?.Account?.username}
        Subtext=""
        img={ProfileImg}
      />
      <Box className={classes.mainItems}>
        <Box className={classes.titleBox}>
          <Typography variant="h3" className={classes.title}>
            Movies Based On Your Taste
          </Typography>
          <Categories />
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            {RatedMovies?.RatedMovies.map((item: any, i: number) => {
              return (
                <Favourite
                  key={i}
                  rate={item.rating}
                  title={item.title}
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`}
                  describtion=""
                  hight={350}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
