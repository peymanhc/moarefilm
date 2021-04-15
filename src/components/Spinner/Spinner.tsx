import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin:"30px 0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"65vh"
      },
  }),
);

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={80} />
    </div>
  );
}