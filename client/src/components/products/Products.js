import React, { useContext,useEffect } from 'react';
import ProductItem from './ProductItem';
import Spinner from '../layout/Spinner';
import ProducthuntContext from '../../context/producthunt/producthuntContext';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Products = () => {
  const classes = useStyles();
  const producthuntContext = useContext(ProducthuntContext);
  const {loading,getProducts,products}=producthuntContext
   
    useEffect(() => {
        getProducts('developer-tools')
          // eslint-disable-next-line
    }, [])

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product}  />
        ))}
      </Grid>
    </Container>
    );
  }
};



export default Products;
