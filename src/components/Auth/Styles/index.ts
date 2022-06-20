import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '35%',
    marginTop: '125px',
  },
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: '55%',
    marginTop: '125px',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '5%',
  },
});

export default useStyles;
