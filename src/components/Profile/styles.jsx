import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    backgroundColor: '#2c2c54',
    borderRadius: '3px',
    marginTop: '25px',
    width: '100%',
    display: 'inline-block',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
  },
  divName: {
    lineHeight: '18px',
    padding: '20px',
    color: 'whitesmoke',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '17px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'whitesmoke',
  },
  title: {
    fontSize: '13px',
    textAlign: 'center',
    color: 'whitesmoke',
  },
  figure: {
    margin: '5px -20px',
    webkitClipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
    clipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
  },
  info: {
    marginLeft: '25%',
    marginTop: '-45px',
  },
}));

export default useStyles;
