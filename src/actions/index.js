import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const ROOT_API_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=alexfromsofia';

export function fetchPosts() {
  const request = axios.get(`${ROOT_API_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  axios.post(`${ROOT_API_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST
  }
}