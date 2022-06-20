import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import heroImage from './Images/heroImage.png';
import voypostLogo from './Images/voypostLogo.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullHeight: { height: '100%' },
  leftSide: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url(${heroImage})`,
  },
  rightSide: {
    '&.MuiGrid-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 10%',
      backgroundSize: '20%',
      backgroundImage: `url(${voypostLogo})`,
    },
  },
});

interface GuestLayoutProps {
  children: React.ReactElement;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container fixed maxWidth="md" className={classes.fullHeight}>
        <Grid container className={classes.fullHeight}>
          <Grid item xs={6} className={classes.leftSide} />
          <Grid item xs={6} className={classes.rightSide}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GuestLayout;
