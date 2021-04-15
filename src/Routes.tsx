import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import Login from "./pages/Login/Login";
import DetailPage from "./pages/Detail/DetailPage";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import Cast from "./pages/Cast";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import TVMovies from "./pages/TvMovies";
import MovieList from "./pages/MovieList";
import Search from "./pages/Search";
import WhatYouLike from "./pages/WhatYouLike";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import DetailTVShow from "./pages/DetailTV";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <CssBaseline />
            <Switch>
              <Route path="/detail/:id" component={DetailPage} />
              <Route path="/detailTV/:id" component={DetailTVShow} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/Movies" component={Movies} />
              <Route path="/TVMovies" component={TVMovies} />
              <Route path="/Search" component={Search} />
              <Route exact path="/Person/:id" component={Cast} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/MovieList/:category" component={MovieList} />
              <Route exact path="/500" component={ServerError} />
              <Route exact path="/you-like" component={WhatYouLike} />
              <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
