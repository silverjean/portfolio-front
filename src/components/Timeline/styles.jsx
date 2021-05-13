import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginLeft: '-140% !important',
  },

  // .timeline .t_header
  t_header: {
    paddingTop: '7px',
  },

  // .timeline .t_firstItem
  t_firstItem: {
    minHeight: '80px !important',
  },

  // .timeline .t_dot_header
  t_dot_header: {
    color: '#535c68',
    fontSize: 'small',
    padding: '2px !important',
  },

  // .timeline .t_dot
  t_dot: {
    color: '#535c68',
    padding: '2px !important',
    fontSize: 'small',
  },

  // .timeline .separator
  separator: {
    paddingLeft: '-120px !important',
  },
}));

export default useStyles;
