import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Titles from "../../components/Titles";
import { Box, Theme } from "@material-ui/core";
import HeaderBanner from "../../images/banner.jpg";
import { useSelector, useDispatch } from 'react-redux';
import AllPosts from "../../components/AllPosts";
import { makeStyles } from "@material-ui/styles";
import { fetchActionMovies } from '../../Redux/Actions/TopActionMovies';
import { fetchHorror } from '../../Redux/Actions/HorrorMovies';
import { fetchTopComedy } from '../../Redux/Actions/TopComedyMovies';
import SkeletonLoading from "../../components/Skeleton";


const useStyles = makeStyles((theme: Theme) =>
  ({

    cards: {
      [theme.breakpoints.down("md")]: {
        padding: "20px",
      },
    }

  })
  );



function Movies(props: any) {
  
  const dispatch = useDispatch();
  const ActionMovies = useSelector((state: any) => state.ActionMovies);
  const Horror = useSelector((state: any) => state.Horror);
  const ComedyMovies = useSelector((state: any) => state.ComedyMovies);

  useEffect(() => {
    dispatch(fetchActionMovies());
    dispatch(fetchHorror());
    dispatch(fetchTopComedy());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Actions = ActionMovies.TopMovies.slice(0, 3);
  const ComedyMoviesList = ComedyMovies.Comedies.slice(0, 3);
  const HorrorMovies = Horror.TopMovies.slice(0, 3);
  const classes = useStyles();

  const PageLoading =
    !ActionMovies.loading &&
    !Horror.loading &&
    !ComedyMovies.loading;
  
  return (
    <>
    {PageLoading ? 
          <Box>
          <Banner
            title={"Sweet Juisy Movies"}
            Subtext=""
            button={"Find What You Like"}
            link="/you-like"
            img={HeaderBanner}
          />
          <Box className={classes.cards}>
          <Titles
            seeallBtn={"see All Action Movies"}
            title={"Top Action Movies"}
            links="MovieList/Action"
          />
          <AllPosts movies={Actions}/>
          <Titles
            seeallBtn={"see All Comedy Movies"}
            title={"Top Comedy Movies"}
            links="MovieList/Comedy"
          />
          <AllPosts movies={ComedyMoviesList}/>
          <Titles
            seeallBtn={"see All Top Horror Movies"}
            title={"Top Horror Movies"}
            links="MovieList/Horror"
          />
          <AllPosts movies={HorrorMovies}/>
          </Box>
        </Box>
  : 
  <SkeletonLoading />
  }

    </>
  );
}

export default Movies;
