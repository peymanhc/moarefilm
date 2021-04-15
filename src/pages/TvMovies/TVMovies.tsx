import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Titles from "../../components/Titles";
import { Box } from "@material-ui/core";
import HeaderBanner from "../../images/img19.jpg";
import { useSelector, useDispatch } from "react-redux";
import AllPosts from "../../components/AllPosts";
import { fetchActionTvShows } from "../../Redux/Actions/TopActionTvShowAction";
import { fetchComedyTvShows } from "../../Redux/Actions/TopComedyTvShowAction";
import { fetchHorrorTvShows } from "../../Redux/Actions/TopHorrorTvShowsAction";
import SkeletonLoading from "../../components/Skeleton";

const TVMovies = (props: any) => {
  const dispatch = useDispatch();
  const ActionTvShowReducer = useSelector(
    (state: any) => state.ActionTvShowReducer
  );
  const ComedyTvShowReducer = useSelector(
    (state: any) => state.ComedyTvShowReducer
  );
  const HorrorTvShowReducer = useSelector(
    (state: any) => state.HorrorTvShowReducer
  );

  useEffect(() => {
    dispatch(fetchActionTvShows());
    dispatch(fetchComedyTvShows());
    dispatch(fetchHorrorTvShows());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions = ActionTvShowReducer.actionTvShows.slice(0, 3);
  const comedies = ComedyTvShowReducer.comedyTvShows.slice(0, 3);
  const horrors = HorrorTvShowReducer.horrorTvShows.slice(0, 3);

  const PageLoading =
  !ActionTvShowReducer.loading &&
  !ComedyTvShowReducer.loading &&
  !HorrorTvShowReducer.loading;

  return (
    <>
    {PageLoading ?<Box>
      <Banner
        title={"Sweet Juisy TV Series"}
        Subtext=""
        button={"Find What You Like"}
        link="/you-like"
        img={HeaderBanner}
      />
      <Titles
        seeallBtn={"see All Action TV Series"}
        title={"Top Action TV Series"}
        links="MovieList/ActionTvShows"
      />
      <AllPosts movies={actions} />
      <Titles
        seeallBtn={"see All Comedy TV Series"}
        title={"Top Comedy TV Series"}
        links="MovieList/ComedyTvShows"
      />
      <AllPosts movies={comedies} />
      <Titles
        seeallBtn={"see All Top Horror TV Series"}
        title={"Top Horror TV Series"}
        links="MovieList/HorrorTvShows"
      />
      <AllPosts movies={horrors}/>
    </Box> : 
         <SkeletonLoading />
      }
    
    </>
  );
};

export default TVMovies;
