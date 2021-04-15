import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterMobileSize from "../../components/FilterMobileSize";
import { Input } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchMovies } from "../../Redux/Actions/SearchMovieAction";
import { fetchSearchPeople } from "../../Redux/Actions/SearchPeopleAction";
import { fetchSearchTvShows } from "../../Redux/Actions/SearchTvShowsAction";
import PostList from "../../components/PostList";
import CastCard from "../../components/CastCard/CastCard";
import LoadingIcon from "@material-ui/core/CircularProgress";

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
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        marginTop: "70px",
      },
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
        margin: "2rem auto",
        display: "flex",
      },
    },
    contentWrapper: {
      width: 900,
      padding: "0 15px",
    },
    SearchField: {
      width: "100%",
      height: 55,
      color: "#fff",
      fontSize: 20,
      padding: 20,
      "&::placeholder": {
        color: "#948e8e !important",
      },
    },
    icon: {
      color: theme.palette.primary.main,
      width: 60,
      height: 35,
    },
    inputBox: {
      boxShadow: `0px 1px 1px ${theme.palette.primary.main}`,
      backgroundColor: "#564e4c",
      display: "flex",
    },
  })
);

const Search = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const onSubmit = () => {
    switch (checked) {
      case 0:
        dispatch(fetchSearchMovies(searchText));
        break;
      case 1:
        dispatch(fetchSearchTvShows(searchText));
        break;
      case 2:
        dispatch(fetchSearchPeople(searchText));
        break;
      default:
        break;
    }
  };
  const [checked, setChecked] = useState<number>(0);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const SrarchMovies = useSelector((state: any) => state.SrarchMovies);
  const SearchPeople = useSelector((state: any) => state.SearchPeople);
  const SearchTvShows = useSelector((state: any) => state.SearchTvShows);

  const handleToggle = (value: number) => {
    setChecked(value);
    console.log(value);
  };
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";

  const searchMovieResult = SrarchMovies.resultMovies;
  const searchPeopleResult = SearchPeople.resultPeople;
  const searchTvShowsResult = SearchTvShows.resultTvShows;

  const pageLoading =
    SrarchMovies.loading || SearchPeople.loading || SearchTvShows.loading;

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
                  onClick={() => handleToggle(value)}
                  variant={checked === value ? "contained" : "outlined"}
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
                  onClick={() => handleToggle(value)}
                  key={value}
                  control={
                    <Checkbox
                      checked={checked === value}
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
          <Box className={classes.inputBox}>
            <Input
              inputref={register}
              name={"Search For Movies Here"}
              value={searchText}
              onChange={(e: any) => {
                setSearchText(e.target.value);
              }}
            />
            <IconButton onClick={handleSubmit(onSubmit)}>
              {pageLoading ? (
                <LoadingIcon size={35} style={{ marginRight: "10px" }} />
              ) : (
                <SearchIcon className={classes.icon} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {checked === 0
          ? searchMovieResult.map((movie: any) => (
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                style={{ padding: "10px" }}
                key={movie.id}
              >
                <PostList
                  rate={movie.vote_average / 2}
                  title={
                    movie.name === undefined ? movie.original_title : movie.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
                  describtion=""
                  link={`/detail/` + movie.id}
                />
              </Grid>
            ))
          : null}
        {checked === 1
          ? searchTvShowsResult.map((tvShow: any) => (
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                style={{ padding: "10px" }}
                key={tvShow.id}
              >
                <PostList
                  rate={tvShow.vote_average / 2}
                  title={
                    tvShow.name === undefined
                      ? tvShow.original_title
                      : tvShow.name
                  }
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${tvShow.backdrop_path}`}
                  describtion=""
                  link={`/detailtv/` + tvShow.id}
                />
              </Grid>
            ))
          : null}
        {checked === 2
          ? searchPeopleResult.map((person: any) => (
              <Grid
                item
                lg={2}
                md={3}
                sm={4}
                xs={12}
                style={{ padding: "10px" }}
                key={person.id}
              >
                <CastCard
                  id={person.id}
                  name={person.name}
                  image={
                    person.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                      : require("../../images/profile.png")
                  }
                />
              </Grid>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Search;
