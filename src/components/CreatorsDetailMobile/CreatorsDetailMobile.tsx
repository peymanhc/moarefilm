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
  flex: {
    display: "flex",
  },
}));

interface Props {
  runTime?: number;
  releaseDate?: string;
  Director: any;
  writer: any;
}

const CreatorsDetailMobile: React.FC<Props> = ({
  runTime,
  releaseDate,
  Director,
  writer,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Accordion className={classes.expandMain}>
        <AccordionSummary
          className={classes.title}
          expandIcon={<ExpandMoreIcon color="secondary" />}
        >
          <Typography>Movie Info</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.infoMain}>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Director: </Typography>
            &nbsp;
            <Typography className={classes.flex}>{Director}</Typography>
          </Box>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Writer: </Typography>
            &nbsp;
            <Typography className={classes.flex}>{writer}</Typography>
          </Box>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>RunTime: </Typography>
            &nbsp;
            <Typography>{runTime} min</Typography>
          </Box>
          <Box className={classes.info}>
            <Typography style={{ fontWeight: "bold" }}>Director: </Typography>
            &nbsp;
            <Typography>{releaseDate}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CreatorsDetailMobile;
