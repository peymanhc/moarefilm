import React from "react";
import { Grid, Theme, createStyles, Box } from "@material-ui/core";
import PostList from "../../components/PostList";
import PostsMobileSize from "../../components/PostMobileSize";
import { makeStyles } from "@material-ui/styles";
import PostSlider from "../../components/PostSlider/PostSlider";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Desktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    mobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

function AllPosts({ movies }: { movies?: any }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.mobile}>
        <PostSlider>
          {movies.map((movie: any) => {
            return (
              <Box key={movie.id}>
                {movie.adult === undefined ? (
                  <PostsMobileSize
                    rate={movie.vote_average / 2}
                    title={
                      movie.name === undefined
                        ? movie.original_title
                        : movie.name
                    }
                    image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                    describtion=""
                    link={`/detailTV/` + movie.id}
                  />
                ) : (
                  <PostsMobileSize
                    rate={movie.vote_average / 2}
                    title={
                      movie.name === undefined
                        ? movie.original_title
                        : movie.name
                    }
                    image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                    describtion=""
                    link={`/detail/` + movie.id}
                  />
                )}
              </Box>
            );
          })}
        </PostSlider>
      </Box>
      <Box>
        <Grid className={classes.Desktop} container spacing={3}>
          {movies.map((movie: any) => {
            return (
              <Grid key={movie.id} item={true} md={4} xs={12}>
                {movie.adult === undefined ? (
                  <PostList
                    rate={movie.vote_average / 2}
                    title={movie.name}
                    image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                    describtion=""
                    link={`/detailTV/` + movie.id}
                  />
                ) : (
                  <PostList
                    rate={movie.vote_average / 2}
                    title={movie.original_title}
                    image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                    describtion=""
                    link={`/detail/` + movie.id}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default AllPosts;
