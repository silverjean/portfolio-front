import { createMuiTheme } from '@material-ui/core';
// import { ptBR } from '@material-ui/core/locale';

import 'typeface-roboto';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#95afc0',
    },
    secondary: {
      main: '#30336b',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['Roboto', 'serif'].join(','),
    fontSize: 14,
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
      },
    },
  },
});
