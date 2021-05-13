import { createMuiTheme } from '@material-ui/core';
// import { ptBR } from '@material-ui/core/locale';

import 'typeface-roboto';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2c2c54',
    },
    secondary: {
      main: '#706fd3',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['Roboto', 'serif'].join(','),
    fontSize: 14,
    button: {
      background: 'none',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          WebkitFontSmoothing: 'auto',
          backgroundColor: '#f0f9fa',
          color: '#95afc0',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '12px',
        transition: '1.2s all',
        '&:hover': {
          color: 'white',
          background: 'none !important',
        },
      },
    },
  },
});
