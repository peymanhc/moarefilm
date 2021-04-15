import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//components
import CreatorsDetail from "../../components/DetailCreators/DetailCreators";
import CastList from "../../components/CastsList/CastsList";
import Banner from "../../components/Banner";
import Raiting from "../../components/Rating";
import Titles from "../../components/Titles";
import AllPosts from "../../components/AllPosts";
import { DetailTV } from "../../Redux/Actions/DetailTv";
import { FetchCreators } from "../../Redux/Actions/CastMovies";
import { FetchTopRated } from "../../Redux/Actions/TopRated";
import Skeleton from "@material-ui/lab/Skeleton";

interface Props {
  title: string;
  text: string;
  star: number;
}
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      padding: "30px",
    },
  },
  mainBox: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100vh",
  },
  describtion: {
    color: "white",
    fontSize: 18,
    textAlign: "left",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      fontSize: "16px",
    },
  },
  section: {
    width: "100%",
    margin: "50px auto",
    backgroundColor: "#821010",
    [theme.breakpoints.up("md")]: {
      minheight: 300,
      display: "flex",
      justifyContent: "center",
    },
  },
  cards: {
    [theme.breakpoints.down("md")]: {
      padding: "0px 15px",
      marginRight: "15px",
    },
  },
}));

const DetailTVShow = (props: Props) => {
  const classes = useStyles();
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";

  const dispatch = useDispatch();
  const params: any = useParams();

  const Creators = useSelector((state: any) => state.Creators);
  const SimilarMovies = useSelector((state: any) => state.SimilarMovies);
  const DetailtvMovies = useSelector((state: any) => state.DetailTV);
  const TopRatedMovies = useSelector((state: any) => state.TopRated);

  const SimilarMoviesList = SimilarMovies.Similars.slice(0, 3);
  const tvmovies = DetailtvMovies.DetailofTv;
  const TopMovies = TopRatedMovies.TopRated.slice(0, 3);

  useEffect(() => {
    dispatch(DetailTV(params.id));
    dispatch(FetchCreators(params.id));
    dispatch(FetchTopRated());
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      {DetailtvMovies.loading ? (
        <Box>
          <Skeleton variant="rect" width={"100%"} height={450} />
        </Box>
      ) : (
        <>
          {" "}
          <Banner
            title={tvmovies.original_name}
            Subtext={<Raiting rating={true} star={tvmovies.vote_average / 2} />}
            button={"i like this one"}
            link="#"
            img={`${IMAGE_BASE_URL}${POSTER_SIZE}${tvmovies.backdrop_path}`}
          />
          <Box className={classes.root}>
            <Typography className={classes.describtion}>
              {tvmovies.overview}
            </Typography>
            <CreatorsDetail
              runTime={tvmovies.episode_run_time}
              releaseDate={tvmovies.last_air_date}
              Director={
                !tvmovies.created_by
                  ? "_________"
                  : tvmovies.created_by
                      .slice(0, 2)
                      .map((item: any, i: number) => {
                        return (
                          <li key={i} style={{ listStyle: "none", padding: 5 }}>
                            <Link
                              style={{ textDecoration: "none", color: "white" }}
                              to={`/Person/${item.id}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })
              }
              writer={
                !tvmovies.production_companies
                  ? "_________"
                  : tvmovies.production_companies
                      .slice(0, 2)
                      .map((item: any, i: number) => {
                        return (
                          <li key={i} style={{ listStyle: "none", padding: 5 }}>
                            {item.name}
                          </li>
                        );
                      })
              }
              title={"Companies"}
            />
            {Creators.loading ? (
              <Box>
                <Skeleton variant="rect" width={"100%"} height={450} />
              </Box>
            ) : (
              <Box>
                <CastList Creators={Creators} />
              </Box>
            )}
          </Box>
        </>
      )}
      {SimilarMovies.loading || TopRatedMovies.loading ? (
        <Box style={{ marginTop: "15px" }}>
          <Skeleton variant="text" width={"100%"} height={50} />
          <Skeleton
            style={{ marginTop: "30px" }}
            variant="rect"
            width={"100%"}
            height={250}
          />
        </Box>
      ) : (
        <Box className={classes.cards}>
          <Titles
            seeallBtn={""}
            title={"You May Also Like"}
            links="/MovieList"
          />
          <AllPosts
            movies={
              SimilarMoviesList.length === 0 ? TopMovies : SimilarMoviesList
            }
          />
        </Box>
      )}
    </>
  );
};

export default DetailTVShow;
