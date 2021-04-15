import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "20px",
    width: "100%",
  },
  expandMain: {
    backgroundColor: "#7d0000",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    alignItems: "center",
  },
  infoMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
  },
  title: {
    boxShadow: "0 4px 2px -2px rgba(0,0,0,0.1)",
  },
}));

interface Props {
  gender: number;
  birthDay: string;
  deathDay: string;
  knownFor: string;
}

const CastInfoMobile: React.FC<Props> = ({
  gender,
  birthDay,
  deathDay,
  knownFor,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Accordion className={classes.expandMain}>
        <AccordionSummary
          className={classes.title}
          expandIcon={<ExpandMoreIcon color="secondary" />}
        >
          <Typography>Cast Info</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.infoMain}>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Gender: </Typography>
            &nbsp;
            <Typography style={{ display: "ruby" }}>
              {gender === 1 ? "female" : "male"}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Birth Day: </Typography>
            &nbsp;
            <Typography>{birthDay}</Typography>
          </Box>
          {deathDay === null ? null : (
            <Box className={classes.info}>
              <Typography style={{ fontWeight: "bold" }}>
                Death Day:{" "}
              </Typography>
              &nbsp;
              <Typography>{deathDay}</Typography>
            </Box>
          )}
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Known For: </Typography>
            &nbsp;
            <Typography>{knownFor}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CastInfoMobile;
