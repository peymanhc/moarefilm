import {
  fetchPopularTvShowsSuccessAction,
  fetchPopularTvShowsLoadingAction,
  fetchPopularTvShowsFailureAction,
} from "../Actions/PopularTvShowsAction";
import {
  fetchPopularTopMoviesSuccessAction,
  fetchPopularTopMoviesLoadingAction,
  fetchPopularTopMoviesFailureAction,
} from "../Actions/TopPopularMovies";
import {
  fetchActionMoviesSuccess,
  fetchActionMoviesLoading,
  fetchActionMoviesFailure,
} from "../Actions/TopActionMovies";
import {
  fetchHorrorLoadingAction,
  fetchHorrorSuccessAction,
  fetchHorrorFailureAction,
} from "../Actions/HorrorMovies";
import {
  fetchTopComedyLoadingAction,
  fetchTopComedySuccessAction,
  fetchTopComedyFailureAction,
} from "../Actions/TopComedyMovies";
import {
  fetchSimilarLoadingAction,
  fetchSimilarSuccessAction,
  fetchSimilarFailureAction,
} from "../Actions/SimilarMoviesAction";
import {
  DetailMoviesSuccessAction,
  DetailMoviesLoadingAction,
  DetailMoviesFailureAction,
} from "../Actions/DetailMovies";
import {
  DetailTVLoadingAction,
  DetailTVFailureAction,
  DetailTVSuccessAction,
} from "../Actions/DetailTv";
import {
  CreatorsLoadingAction,
  CreatorsSuccessAction,
  CreatorsFailureAction,
} from "../Actions/CastMovies";
import {
  TopRatedLoadingAction,
  TopRatedSuccessAction,
  TopRatedFailureAction,
} from "../Actions/TopRated";
import {
  CastDetailLoadingAction,
  CastDetailSuccessAction,
  CastDetailFailureAction,
} from "../Actions/CastDetailAction";
import {
  castMoviesLoadingAction,
  castMoviesSuccessAction,
  castMoviesFailureAction,
} from "../Actions/CastMoviesAction";
import {
  castTvShowsLoadingAction,
  castTvShowsSuccessAction,
  castTvShowsFailureAction,
} from "../Actions/CastTvShowsAction";
import {
  fetchActionTvShowsLoadingAction,
  fetchActionTvShowsSuccessAction,
  fetchActionTvShowsFailureAction,
} from "../Actions/TopActionTvShowAction";
import {
  fetchComedyTvShowsLoadingAction,
  fetchComedyTvShowsSuccessAction,
  fetchComedyTvShowsFailureAction,
} from "../Actions/TopComedyTvShowAction";
import {
  fetchHorrorTvShowsFailureAction,
  fetchHorrorTvShowsSuccessAction,
  fetchHorrorTvShowsLoadingAction,
} from "../Actions/TopHorrorTvShowsAction";
import {
  searchMoviesLoadingAction,
  searchMoviesSuccessAction,
  searchMoviesFailureAction,
} from "../Actions/SearchMovieAction";
import {
  searchPeopleLoadingAction,
  searchPeopleSuccessAction,
  searchPeopleFailureAction,
} from "../Actions/SearchPeopleAction";
import {
  searchTvShowsFailureAction,
  searchTvShowsLoadingAction,
  searchTvShowsSuccessAction,
} from "../Actions/SearchTvShowsAction";
import { AUTHLogOut, AuthSuccess, AuthFaill } from "../Actions/Auth";
import {
  AccountFailedAction,
  AccountLoadingAction,
  AccountSuccessAction,
} from "../Actions/Account";
import {
  fetchFavoratesFailureAction,
  fetchFavoratesLoadingAction,
  fetchFavoratesSuccessAction,
} from "../Actions/Favorate";
import {
  fetchRatedFailureAction,
  fetchRatedLoadingAction,
  fetchRatedSuccessAction,
} from "../Actions/RatedVideos";

//papular tv shows
export const FETCH_POPULAR_TV_SHOWS_LOADING = "FETCH_POPULAR_TV_SHOWS_LOADING";
export const FETCH_POPULAR_TV_SHOWS_SUCCESS = "FETCH_POPULAR_TV_SHOWS_SUCCESS";
export const FETCH_POPULAR_TV_SHOWS_FAILURE = "FETCH_POPULAR_TV_SHOWS_FAILURE";
// comedy movies
export const FETCH_TOP_COMEDY_LOADING = "FETCH_TOP_COMEDY_LOADING";
export const FETCH_TOP_COMEDY_SUCCESS = "FETCH_TOP_COMEDY_SUCCESS";
export const FETCH_TOP_COMEDY_FAILURE = "FETCH_TOP_COMEDY_FAILURE";
//papular movies
export const FETCH_POPULAR_TOP_MOVIES_LOADING =
  "FETCH_POPULAR_TOP_MOVIES_LOADING";
export const FETCH_POPULAR_TOP_MOVIES_SUCCESS =
  "FETCH_POPULAR_TOP_MOVIES_SUCCESS";
export const FETCH_POPULAR_TOP_MOVIES_FAILURE =
  "FETCH_POPULAR_TOP_MOVIES_FAILURE";
//action movies
export const FETCH_TOP_ACTION_MOVIES_LOADING =
  "FETCH_TOP_ACTION_MOVIES_LOADING";
export const FETCH_TOP_ACTION_MOVIES_SUCCESS =
  "FETCH_TOP_ACTION_MOVIES_SUCCESS";
export const FETCH_TOP_ACTION_MOVIES_FAILURE =
  "FETCH_TOP_ACTION_MOVIES_FAILURE";
//horror movies
export const FETCH_HORROR_LOADING = "FETCH_HORROR_LOADING";
export const FETCH_HORROR_SUCCESS = "FETCH_HORROR_SUCCESS";
export const FETCH_HORROR_FAILURE = "FETCH_HORROR_FAILURE";
//similar movies
export const FETCH_SIMILAR_LOADING = "FETCH_SIMILAR_LOADING";
export const FETCH_SIMILAR_SUCCESS = "FETCH_SIMILAR_SUCCESS";
export const FETCH_SIMILAR_FAILURE = "FETCH_SIMILAR_FAILURE";
//Detail movies
export const DETAIL_MOVIES_LOADING = "DETAIL_MOVIES_LOADING";
export const DETAIL_MOVIES_SUCCESS = "DETAIL_MOVIES_SUCCESS";
export const DETAIL_MOVIES_FAILURE = "DETAIL_MOVIES_FAILURE";
//Detail TV
export const DETAIL_TV_LOADING = "DETAIL_TV_LOADING";
export const DETAIL_TV_SUCCESS = "DETAIL_TV_SUCCESS";
export const DETAIL_TV_FAILURE = "DETAIL_TV_FAILURE";
//Creators Movie
export const CREATORS_MOVIES_LOADING = "CREATORS_MOVIES_LOADING";
export const CREATORS_MOVIES_SUCCESS = "CREATORS_MOVIES_SUCCESS";
export const CREATORS_MOVIES_FAILURE = "CREATORS_MOVIES_FAILURE";
//TopRated Movie
export const TOP_RATED_MOVIES_LOADING = "TOP_RATED_MOVIES_LOADING";
export const TOP_RATED_MOVIES_SUCCESS = "TOP_RATED_MOVIES_SUCCESS";
export const TOP_RATED_MOVIES_FAILURE = "TOP_RATED_MOVIES_FAILURE";
// cast detail
export const CAST_DETAIL_LOADING = "CAST_DETAIL_LOADING";
export const CAST_DETAIL_SUCCESS = "CAST_DETAIL_SUCCESS";
export const CAST_DETAIL_FAILURE = "CAST_DETAIL_FAILURE";
// cast movies
export const CAST_MOVIES_LOADING = "CAST_MOVIES_LOADING";
export const CAST_MOVIES_SUCCESS = "CAST_MOVIES_SUCCESS";
export const CAST_MOVIES_FAILURE = "CAST_MOVIES_FAILURE";
//cast tv shows
export const CAST_TV_SHOWS_LOADING = "CAST_TV_SHOWS_LOADING";
export const CAST_TV_SHOWS_SUCCESS = "CAST_TV_SHOWS_SUCCESS";
export const CAST_TV_SHOWS_FAILURE = "CAST_TV_SHOWS_FAILURE";
// action tv show
export const ACTION_TV_SHOW_LOADING = "ACTION_TV_SHOW_LOADING";
export const ACTION_TV_SHOW_SUCCESS = "ACTION_TV_SHOW_SUCCESS";
export const ACTION_TV_SHOW_FAILURE = "ACTION_TV_SHOW_FAILURE";
// comedy tv shows
export const COMEDY_TV_SHOW_LOADING = "COMEDY_TV_SHOW_LOADING";
export const COMEDY_TV_SHOW_SUCCESS = "COMEDY_TV_SHOW_SUCCESS";
export const COMEDY_TV_SHOW_FAILURE = "COMEDY_TV_SHOW_FAILURE";
// horror tv shows
export const HORROR_TV_SHOWS_LOADING = "HORROR_TV_SHOWS_LOADING";
export const HORROR_TV_SHOWS_SUCCESS = "HORROR_TV_SHOWS_SUCCESS";
export const HORROR_TV_SHOWS_FAILURE = "HORROR_TV_SHOWS_FAILURE";
// search movies
export const SEARCH_MOVIE_LOADING = "SEARCH_MOVIE_LOADING";
export const SEARCH_MOVIE_SUCCESS = "SEARCH_MOVIE_SUCCESS";
export const SEARCH_MOVIE_FAILURE = "SEARCH_MOVIE_FAILURE";
// search people
export const SEARCH_PEOPLE_LOADING = "SEARCH_PEOPLE_LOADING";
export const SEARCH_PEOPLE_SUCCESS = "SEARCH_PEOPLE_SUCCESS";
export const SEARCH_PEOPLE_FAILURE = "SEARCH_PEOPLE_FAILURE";
// search tv shows
export const SEARCH_TV_SHOWS_LOADING = "SEARCH_TV_SHOWS_LOADING";
export const SEARCH_TV_SHOWS_SUCCESS = "SEARCH_TV_SHOWS_SUCCESS";
export const SEARCH_TV_SHOWS_FAILURE = "SEARCH_TV_SHOWS_FAILURE";
// Auth
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
// Account
export const ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS";
export const ACCOUNT_FAIL = "ACCOUNT_FAIL";
export const ACCOUNT_LOADING = "ACCOUNT_LOADING";
// Favorate_Movies
export const FETCH_FAVORATE_SUCCESS = "FETCH_FAVORATE_SUCCESS";
export const FETCH_FAVORATE_FAILURE = "FETCH_FAVORATE_FAILURE";
export const FETCH_FAVORATE_LOADING = "FETCH_FAVORATE_LOADING";
// Favorate_RATED_Movies
export const FETCH_RATED_SUCCESS = "FETCH_RATED_SUCCESS";
export const FETCH_RATED_FAILURE = "FETCH_RATED_FAILURE";
export const FETCH_RATED_LOADING = "FETCH_RATED_LOADING";

export type fetchTVShowsActions =
  | fetchPopularTvShowsSuccessAction
  | fetchPopularTvShowsLoadingAction
  | fetchPopularTvShowsFailureAction;

export type getAccountDetail =
  | AccountLoadingAction
  | AccountSuccessAction
  | AccountFailedAction;

export type PopularTopMovies =
  | fetchPopularTopMoviesSuccessAction
  | fetchPopularTopMoviesLoadingAction
  | fetchPopularTopMoviesFailureAction;

export type TopActionMovies =
  | fetchActionMoviesSuccess
  | fetchActionMoviesLoading
  | fetchActionMoviesFailure;

export type Horror =
  | fetchHorrorLoadingAction
  | fetchHorrorSuccessAction
  | fetchHorrorFailureAction;

export type FetchTopComedyMovies =
  | fetchTopComedyLoadingAction
  | fetchTopComedySuccessAction
  | fetchTopComedyFailureAction;

export type FetchSimilarMovies =
  | fetchSimilarLoadingAction
  | fetchSimilarSuccessAction
  | fetchSimilarFailureAction;

export type DetailMovies =
  | DetailMoviesLoadingAction
  | DetailMoviesSuccessAction
  | DetailMoviesFailureAction;

export type DetailTV =
  | DetailTVLoadingAction
  | DetailTVSuccessAction
  | DetailTVFailureAction;

export type FetchCreators =
  | CreatorsLoadingAction
  | CreatorsSuccessAction
  | CreatorsFailureAction;

export type TopRated =
  | TopRatedLoadingAction
  | TopRatedSuccessAction
  | TopRatedFailureAction;

export type CastDetail =
  | CastDetailLoadingAction
  | CastDetailSuccessAction
  | CastDetailFailureAction;

export type CastMovies =
  | castMoviesLoadingAction
  | castMoviesSuccessAction
  | castMoviesFailureAction;

export type CastTvShows =
  | castTvShowsLoadingAction
  | castTvShowsSuccessAction
  | castTvShowsFailureAction;

export type ActionTvShows =
  | fetchActionTvShowsLoadingAction
  | fetchActionTvShowsSuccessAction
  | fetchActionTvShowsFailureAction;

export type ComedyTvShows =
  | fetchComedyTvShowsLoadingAction
  | fetchComedyTvShowsSuccessAction
  | fetchComedyTvShowsFailureAction;

export type HorrorTvShows =
  | fetchHorrorTvShowsLoadingAction
  | fetchHorrorTvShowsSuccessAction
  | fetchHorrorTvShowsFailureAction;

export type SearchMovies =
  | searchMoviesLoadingAction
  | searchMoviesSuccessAction
  | searchMoviesFailureAction;

export type SearchPeople =
  | searchPeopleLoadingAction
  | searchPeopleSuccessAction
  | searchPeopleFailureAction;

export type SearchTvShows =
  | searchTvShowsFailureAction
  | searchTvShowsSuccessAction
  | searchTvShowsLoadingAction;

export type FavorateMovies =
  | fetchFavoratesLoadingAction
  | fetchFavoratesSuccessAction
  | fetchFavoratesFailureAction;

export type RatedMovies =
  | fetchRatedLoadingAction
  | fetchRatedSuccessAction
  | fetchRatedFailureAction;

export type Authenticated = AUTHLogOut | AuthSuccess | AuthFaill;
