import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea, makeStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles( {
    image: {
    }
} );

const ProductItem = ( { product: { title, desc, image, price } } ) =>
{
    const classes = useStyles();

    return (
        <Grid item xs={ 12 } sm={ 6 } lg={ 4 } >
            <Card>
                <CardActionArea>
                    <CardMedia image={ image } className={ classes.image } component='img' />
                    <CardContent>
                        <Typography component='h4'>
                            { title }
                        </Typography>
                        <Typography component='p'>
                            { desc }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color='secondary'>
                        { price }
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;
