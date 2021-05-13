import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: '#2c2c54',
    borderRadius: '3px',
    marginTop: '10px',
    width: '100%',
    display: 'inline-block',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
  },
  figure: {
    margin: '5px',
  },
  img: {
    width: '100%',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  link: {
    color: 'whitesmoke',
    margin: '5px',
  },
}));

export default useStyles;
