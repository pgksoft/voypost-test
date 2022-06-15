import { makeStyles } from '@mui/styles';
import heroImage from './hero-image.png';
import voypostLogo from './voypost-logo.svg';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    backgroundSize: '20%',
    backgroundImage: `url(${voypostLogo})`,
  },
  signin: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    height: '50%',
  },
});

export default useStyles;
