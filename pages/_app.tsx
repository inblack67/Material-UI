import { ThemeProvider } from '@material-ui/core';
import { CustomTheme } from '../src/hooks/CustomTheme';
import '../styles/globals.css';

function MyApp ( { Component, pageProps } )
{
  return <ThemeProvider theme={ CustomTheme }>
    <Component { ...pageProps } />
  </ThemeProvider>;
}

export default MyApp;
