import { makeStyles } from '@mui/styles';
import heroImage from '../Images/hero-image.png';
import voypostLogo from '../Images/voypost-logo.svg';

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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 10%',
    backgroundSize: '20%',
    backgroundImage: `url(${voypostLogo})`,
  },
  signin: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '35%',
    marginTop: '30%',
  },
  signup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '55%',
    marginTop: '30%',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '5%',
  },
});

export default useStyles;
