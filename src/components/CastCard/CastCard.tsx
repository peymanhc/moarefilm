import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  castCard: {
    height: "235px",
    backgroundColor: "black",
    marginLeft: "10px",
    borderRadius: "0px",
    [theme.breakpoints.down(600)]: {
      minHeight:260,
    },
  },
  cardImage: {
    backgroundColor:"white",
    backgroundPosition: "0px -6px",
    width: "100%",
    height: "210px",
  },
  actorName: {
    color: "#fff",
    textAlign: "center",
  },
}));

interface Props {
  name?:string
  image?: string
  id?:string
}

const CastCard:React.FC<Props> = ({name, image, id}) => {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.castCard}>
        <CardActionArea>
        <Link style={{ textDecoration: "none" }} to={`/Person/${id}`}>
          <CardMedia image={image} className={classes.cardImage} />
            <Typography className={classes.actorName}>{name}</Typography>
          </Link>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CastCard;
