import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import { Grid, createStyles, Theme, Box } from "@material-ui/core";
import topMoviesPoster from "../../images/img19.jpg";
import PostList from "../../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { fetchPopularTvShows } from "../../Redux/Actions/PopularTvShowsAction";
import { fetchPopularTopMovies } from "../../Redux/Actions/TopPopularMovies";
import { fetchActionMovies } from "../../Redux/Actions/TopActionMovies";
import { fetchHorror } from "../../Redux/Actions/HorrorMovies";
import { fetchTopComedy } from "../../Redux/Actions/TopComedyMovies";
import { fetchActionTvShows } from "../../Redux/Actions/TopActionTvShowAction";
import { fetchComedyTvShows } from "../../Redux/Actions/TopComedyTvShowAction";
import { fetchHorrorTvShows } from "../../Redux/Actions/TopHorrorTvShowsAction";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "0px 15px",
      [theme.breakpoints.up("md")]: {
        padding: "20px 0px",
      },
    },
  })
);

function MovieList(props: any) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  const dispatch = useDispatch();
  const PopularShows = useSelector((state: any) => state.popularTvShows);
  const TopMovies = useSelector((state: any) => state.TopMovies);
  const ActionMovies = useSelector((state: any) => state.ActionMovies);
  const Horror = useSelector((state: any) => state.Horror);
  const ComedyMovies = useSelector((state: any) => state.ComedyMovies);
  const ActionTvShowReducer = useSelector(
    (state: any) => state.ActionTvShowReducer
  );
  const ComedyTvShowReducer = useSelector(
    (state: any) => state.ComedyTvShowReducer
  );
  const HorrorTvShowReducer = useSelector(
    (state: any) => state.HorrorTvShowReducer
  );

  const Category = props.match.params?.category;

  useEffect(() => {
    switch (Category) {
      case "popular":
        dispatch(fetchPopularTopMovies());
        break;
      case "Action":
        dispatch(fetchActionMovies());
        break;
      case "popular-tvShows":
        dispatch(fetchPopularTvShows());
        break;
      case "Comedy":
        dispatch(fetchTopComedy());
        break;
      case "Horror":
        dispatch(fetchHorror());
        break;
      case "ActionTvShows":
        dispatch(fetchActionTvShows());
        break;
      case "ComedyTvShows":
        dispatch(fetchComedyTvShows());
        break;
      case "HorrorTvShows":
        dispatch(fetchHorrorTvShows());
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PopularMoviesData = TopMovies.TopMovies;
  const tvShData = PopularShows.tvShows;
  const Actions = ActionMovies.TopMovies;
  const ComedyMoviesList = ComedyMovies.Comedies;
  const HorrorMovies = Horror.TopMovies;
  const actionsTvShow = ActionTvShowReducer.actionTvShows
  const comediesTvShow = ComedyTvShowReducer.comedyTvShows
  const horrorsTvShow = HorrorTvShowReducer.horrorTvShows

  const classes = useStyles();
  return (
    <Box>
      <Box style={{ marginBottom: 30 }}>
        <Banner
          title={` ${Category} Movies`}
          Subtext=""
          button={"I Like This genre"}
          link="#search"
          img={topMoviesPoster}
        />
      </Box>
      <Box className={classes.root}>
        {TopMovies.loading ||
        PopularShows.loading ||
        ActionMovies.loading ||
        ComedyMovies.loading ||
        ActionTvShowReducer.loading ||
        ComedyTvShowReducer.loading ||
        HorrorTvShowReducer.loading ||
        Horror.loading ? (
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <Box style={{ flex: 1 }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
              <Box style={{ flex: 1, padding: "0px 10px" }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
              <Box style={{ flex: 1 }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <Box style={{ flex: 1 }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
              <Box style={{ flex: 1, padding: "0px 10px" }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
              <Box style={{ flex: 1 }}>
                <Skeleton variant="rect" width={"100%"} height={250} />
              </Box>
            </Box>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {Category === "popular" &&
              PopularMoviesData.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
                </Grid>
              ))}
            {Category === "Action" &&
              Actions.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
                </Grid>
              ))}
            {Category === "popular-tvShows" &&
              tvShData.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
                </Grid>
              ))}
            {Category === "Comedy" &&
              ComedyMoviesList.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
                </Grid>
              ))}
            {Category === "Horror" &&
              HorrorMovies.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
                </Grid>
              ))}
            {Category === "ActionTvShows" &&
              actionsTvShow.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detailTV/` + movie.id}
                />
                </Grid>
              ))}
              {Category === "ComedyTvShows" &&
              comediesTvShow.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detailTV/` + movie.id}
                />
                </Grid>
              ))}
              {Category === "HorrorTvShows" &&
              horrorsTvShow.map((movie: any) => (
                <Grid lg={4} md={6} sm={6} xs={12} style={{padding:"10px"}}>
                <PostList
                  key={movie.id}
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detailTV/` + movie.id}
                />
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default MovieList;
