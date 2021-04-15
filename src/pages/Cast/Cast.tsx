import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import { createStyles, Theme, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Titles from "../../components/Titles";
import CastInfo from "../../components/CastInfo/CastInfo";
import AllPosts from "../../components/AllPosts";
import { useParams } from "react-router-dom";
import { fetchCastDetail } from "../../Redux/Actions/CastDetailAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchCastMovies } from "../../Redux/Actions/CastMoviesAction";
import { fetchCastTvShow } from "../../Redux/Actions/CastTvShowsAction";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    about: {
      width: "100%",
      justifyContent: "center",
      marginTop: "50px",
      display: "grid",
      fontSize: 18,
      color: "#fff",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        padding: "0px 25px",
      },
    },
    info: {
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        padding: "0px 25px",
      },
    },
    cards: {
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        padding: "0px 15px",
        marginTop: "50px",
      },
    },
  })
);
function Home(props: any) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  const classes = useStyles();
  const params: any = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  const CastsDetail = useSelector((state: any) => state.CastsDetail);
  const CastsMovies = useSelector((state: any) => state.CastsMovies);
  const CastsTvShows = useSelector((state: any) => state.CastsTvShows);

  const cast = CastsDetail.Cast;
  const castMovies = CastsMovies.CastMovies.slice(0, 3);
  const castTvShow = CastsTvShows.CastTvShows.slice(0, 3);

  useEffect(() => {
    dispatch(fetchCastDetail(id));
    dispatch(fetchCastMovies(id));
    dispatch(fetchCastTvShow(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      {CastsDetail.loading ? (
        <Box>
          <Box>
            <Skeleton variant="rect" width={"100%"} height={450} />
          </Box>
          <Box style={{ marginTop: "15px" }}>
            <Skeleton variant="text" width={"100%"} height={50} />
            <Skeleton
              style={{ marginTop: "30px" }}
              variant="rect"
              width={"100%"}
              height={250}
            />
          </Box>
        </Box>
      ) : (
        <Box>
          <Banner
            title={cast.name}
            Subtext="Actor"
            button={"I Like This One"}
            link="#"
            img={`${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`}
          />
          <Typography variant="h3" className={classes.about}>
            {cast.biography}
          </Typography>
          <Box className={classes.info}>
            <CastInfo
              gender={cast.gender}
              birthDay={cast.birthday}
              deathDay={cast.deathday}
              knownFor={cast.known_for_department}
            />
          </Box>
          <Box className={classes.cards}>
            <Titles
              seeallBtn={"See all cast movies"}
              title={"Movies"}
              links={`/MovieList/${id}`}
            />
            <AllPosts movies={castMovies} />
          </Box>
          <Box className={classes.cards}>
            <Titles
              seeallBtn={"See all cast tv shows"}
              title={"TV shows"}
              links={`/MovieList/${id}`}
            />
            <AllPosts movies={castTvShow} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Home;
