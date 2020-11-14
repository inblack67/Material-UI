import { Container, Grid, Typography } from "@material-ui/core";
import { ProductsData } from '../src/data/products';
import ProductItem from '../components/ProductItem';

const products = () =>
{
    return (
        <Container>
            <Grid container spacing={ 4 }>
                { ProductsData.length > 0 ? ProductsData.map( product => <ProductItem key={ product.id } product={ product } /> ) : <Typography component='h3' color='textPrimary'>No products yet.</Typography> }
            </Grid>
        </Container>
    );
};

export default products;
