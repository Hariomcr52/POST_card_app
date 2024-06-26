import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
        });
    }, 5000);
  };
};

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});