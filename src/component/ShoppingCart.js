import React from "react";
import useProducts from "../services/useProducts";
import { useSelector } from "react-redux";
import MediaCard from "./common/MuiCard";
import { Grid } from "@mui/material";
import Header from "./common/Header";

const ShoppingCart = () => {
  useProducts();
  const { cart,products } = useSelector((state) => state);

  return (
    <Grid container spacing={2}>
        <Grid item ms={12} width={'inherit'}>
            <Header cart={cart}/>
        </Grid>
      <Grid item ms={4} className="allProducts">
        {products.map((product) => (
          <MediaCard key={product.id} product={product} />
          
        ))}
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
