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
import { fetchSimilar } from "../../Redux/Actions/SimilarMoviesAction";
import { DetailMovies } from "../../Redux/Actions/DetailMovies";
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
  item: {
    listStyle: "none",
    padding: 5,
    [theme.breakpoints.down(960)]: {
      "&::after": {
        content: '" , "',
      },
    },
  },
}));

const DetailPage = (props: Props) => {
  const classes = useStyles();
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  const dispatch = useDispatch();
  const params: any = useParams();

  const SimilarMovies = useSelector((state: any) => state.SimilarMovies);
  const Detail = useSelector((state: any) => state.DetailMovie);
  const Creators = useSelector((state: any) => state.Creators);
  const TopRatedMovies = useSelector((state: any) => state.TopRated);

  useEffect(() => {
    dispatch(DetailMovies(params.id));
    dispatch(fetchSimilar(params.id));
    dispatch(FetchCreators(params.id));
    dispatch(FetchTopRated());
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const wrtingCrews = Creators.Creators
    ? Creators.Creators.crew
        .filter((obj: any) => {
          return obj.department === "Writing";
        })
        .slice(0, 3)
    : null;

  const DirectorCrews = Creators.Creators
    ? Creators.Creators.crew
        .filter((obj: any) => {
          return obj.department === "Directing";
        })
        .slice(0, 3)
    : null;

  const SimilarMoviesList = SimilarMovies.Similars.slice(0, 3);
  const TopMovies = TopRatedMovies.TopRated.slice(0, 3);
  const movie = Detail.DetailMovie;
  return (
    <>
      {Detail.loading ? (
        <Box>
          <Skeleton variant="rect" width={"100%"} height={450} />
        </Box>
      ) : (
        <>
          <Banner
            title={movie.name === undefined ? movie.original_title : movie.name}
            Subtext={<Raiting rating={true} star={movie.vote_average / 2} />}
            button={"i like this one"}
            link="#"
            img={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
          />
          <Box className={classes.root}>
            <Typography className={classes.describtion}>
              {movie.overview}
            </Typography>
            <CreatorsDetail
              runTime={movie.runtime}
              releaseDate={movie.release_date}
              Director={
                !DirectorCrews
                  ? null
                  : DirectorCrews.map((item: any, i: number) => {
                      return (
                        <li className={classes.item} key={i}>
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
                !wrtingCrews
                  ? null
                  : wrtingCrews.map((item: any, i: number) => {
                      return (
                        <li className={classes.item} key={i}>
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
              title="Writer"
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

      {SimilarMovies.loading ? (
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

export default DetailPage;
