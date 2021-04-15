import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bb0a09",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000",
    },
    text: {
      primary: "#fff",
      secondary: "#bb0a09",
    },
    action: {
      hover: "red",
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      },
    },
    MuiButton: {
      contained: {},
      outlined: {
        borderWidth: 30,
        color: "#fff",
      },
      sizeLarge: {
        minWidth: 200,
        height: 40,
        borderWidth: 3,
      },
      sizeSmall: {
        minWidth: 100,
      },
      outlinedPrimary: {
        color: "#fff",
      },
    },
  },
  typography: {
    h3: {
      fontSize: 25,
    },
    h1: {
      fontSize: 45,
    },
  },
});

export default theme;
