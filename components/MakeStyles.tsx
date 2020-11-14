import { makeStyles, Typography } from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles( {
    helloFriendStyle: {
        color: 'red'
    }
} );

const MakeStyles = () =>
{

    const { helloFriendStyle } = useStyles();

    return (
        <Fragment>
            <Typography className={ helloFriendStyle }>
                Hello Friend
            </Typography>
        </Fragment>
    );
};

export default MakeStyles;
