import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Titles from "../../components/Titles";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import HeaderBanner from "../../images/img19.jpg";
import banner from "../../images/banner.jpg";
import AllPosts from "../../components/AllPosts";
import { fetchPopularTvShows } from "../../Redux/Actions/PopularTvShowsAction";
import { fetchPopularTopMovies } from "../../Redux/Actions/TopPopularMovies";
import { fetchActionMovies } from "../../Redux/Actions/TopActionMovies";
import { fetchHorror } from "../../Redux/Actions/HorrorMovies";
import { fetchTopComedy } from "../../Redux/Actions/TopComedyMovies";
import SkeletonLoading from "../../components/Skeleton/SkeletonLoading";

function Home() {
  const dispatch = useDispatch();
  const PopularShows = useSelector((state: any) => state.popularTvShows);
  const TopMovies = useSelector((state: any) => state.TopMovies);
  const ActionMovies = useSelector((state: any) => state.ActionMovies);
  const Horror = useSelector((state: any) => state.Horror);
  const ComedyMovies = useSelector((state: any) => state.ComedyMovies);

  useEffect(() => {
    dispatch(fetchPopularTvShows());
    dispatch(fetchPopularTopMovies());
    dispatch(fetchActionMovies());
    dispatch(fetchHorror());
    dispatch(fetchTopComedy());
    // eslint-disable-next-line
  }, []);

  const PopularMoviesData = TopMovies.TopMovies.slice(0, 3);
  const tvShData = PopularShows.tvShows.slice(0, 3);
  const Actions = ActionMovies.TopMovies.slice(0, 3);
  const ComedyMoviesList = ComedyMovies.Comedies.slice(0, 3);
  const HorrorMovies = Horror.TopMovies.slice(0, 3);

  const PageLoading =
    !TopMovies.loading &&
    !PopularShows.loading &&
    !ActionMovies.loading &&
    !Horror.loading &&
    !ComedyMovies.loading;

  return (
    <>
      {PageLoading ? (
        <>
          <Banner
            title={"Movie recommendations based on your taste"}
            Subtext=""
            button={"Find What You Like"}
            link="you-like"
            img={HeaderBanner}
          />
          <Titles
            seeallBtn={"see All popular movies"}
            title={"popular Movies"}
            links="/MovieList/popular"
          />
          <AllPosts movies={PopularMoviesData} />
          <Titles
            seeallBtn={"see All popular tv shows"}
            title={"popular tv Shows"}
            links="/MovieList/popular-tvShows"
          />
          <AllPosts movies={tvShData} />
          <Titles
            seeallBtn={"see All Top Action Movies shows"}
            title={"Top Action Movies"}
            links="/MovieList/Action"
          />
          <AllPosts movies={Actions} />
          <Box style={{ marginTop: 100 }}>
            <Banner
              title={"Signup For Free To Find Out What You To Watch Tonight"}
              Subtext=""
              button={"Join Us For Free"}
              link="/register"
              img={banner}
            />
          </Box>
          <Titles
            seeallBtn={"see All Top Comedy Movies"}
            title={"Comedy Movies"}
            links="/MovieList/Comedy"
          />
          <AllPosts movies={ComedyMoviesList} />
          <Titles
            seeallBtn={"see All Top Horror Movies"}
            title={"Horror Movies"}
            links="/MovieList/Horror"
          />
          <AllPosts movies={HorrorMovies} />
        </>
      ) : (
        <SkeletonLoading />
      )}
    </>
  );
}

export default Home;
