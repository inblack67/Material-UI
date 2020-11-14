import { AppBar, Toolbar, Typography, makeStyles, IconButton } from "@material-ui/core";
import { Shop as ShopIcon, Home as HomeIcon } from '@material-ui/icons';
import NextLink from 'next/link';

const useStyles = makeStyles( {
    menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
} );

const Navbar = () =>
{
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    Material UI
                    </Typography>
                <div className={ classes.menu }>
                    <div>
                        <NextLink href='/'>
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </NextLink>
                    </div>
                    <div>
                        <NextLink href='/products'>
                            <IconButton>
                                <ShopIcon />
                            </IconButton>
                        </NextLink>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
