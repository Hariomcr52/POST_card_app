import React from 'react';
import { Grid } from '@mui/material';
import Card from './Card';

const CardGrid = ({ posts, onRemove }) => {
  return (
    <Grid container spacing={2}>
      {posts.map(post => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card post={post} onRemove={onRemove} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;