import React, { useState } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { IBusinessCard } from "../utils/globalTypes";

const card: JSX.Element = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom>Businessess</Typography>
    </CardContent>
  </React.Fragment>
);

const Businesses = () => {
  const [businesses, setBusinesses] = useState<IBusinessCard[]>();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">{card}</Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Businesses;
