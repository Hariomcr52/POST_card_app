import React from 'react';
import { Card as MUICard, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Card = ({ post, onRemove }) => {
  return (
    <MUICard>
      <CardContent>
        <IconButton
          aria-label="remove"
          onClick={() => onRemove(post.id)}
          sx={{ float: 'right', color: 'red' }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;