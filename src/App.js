import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';
import CardGrid from './components/CardGrid';
import Pagination from './components/Pagination';
import { fetchPosts, removePost } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CardGrid posts={currentPosts} onRemove={handleRemove} />
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default App;