import { ThemeProvider } from '@material-ui/core';
import Layout from '../components/Layout';
import { CustomTheme } from '../src/hooks/CustomTheme';
import '../styles/globals.css';

function MyApp ( { Component, pageProps } )
{
  return <ThemeProvider theme={ CustomTheme }>
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  </ThemeProvider>;
}

export default MyApp;
