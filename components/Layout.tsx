import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ( { children } ) =>
{
    return (
        <Fragment>
            <Head>
                <title>Material UI</title>
            </Head>
            <Navbar />
            {children }
        </Fragment>
    );
};

export default Layout;
