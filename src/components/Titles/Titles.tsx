import React from 'react';
import {
  useMediaQuery,
  createStyles,
  Theme,
  Button,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

interface Props {
  seeallBtn?: any;
  title: string;
  links: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seeallBtn: {
      textTransform: 'capitalize',
    },
    title: {
      textTransform:"capitalize",
      fontSize: 25,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
      },
    },
  })
);
const Titles = (props: Props) => {
  const Wrapper = ({ children }: any) => {
    const SmScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down('sm')
    );
    if (SmScreen) {
      return <Container>{children}</Container>;
    }
    return <>{children}</>;
  };
  const classes = useStyles();
  return (
    <Wrapper>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={8}
        mb={2}
      >
        <Box>
          <Typography variant="h2" className={classes.title}>
            {props.title}
          </Typography>
        </Box>
        <Box>
          {props.seeallBtn !== '' ? (
            <Link style={{ textDecoration: 'none' }} to={props.links}>
              <Hidden smDown>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  className={classes.seeallBtn}
                >
                  {props.seeallBtn}
                </Button>
              </Hidden>
              <Hidden mdUp>
                <Button
                  color="primary"
                  size="small"
                  variant="contained"
                  className={classes.seeallBtn}
                >
                  See all
                </Button>
              </Hidden>
            </Link>
          ) : null}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Titles;
