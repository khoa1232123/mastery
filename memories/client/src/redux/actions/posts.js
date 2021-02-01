import * as api from '../../api';
import { postTypes } from '../types';

// action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: postTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch, getState) => {
  try {
    const {
      posts: { posts },
    } = getState();
    const { data } = await api.createPost(post);
    posts.push(data);
    dispatch({ type: postTypes.CREATE, payload: posts });
    dispatch(getPosts());
  } catch (error) {
    console.log(error);
  }
};

export const getPostId = (postId) => (dispatch) => {
  dispatch({ type: postTypes.GET_ID, payload: postId });
};

export const clearForm = () => (dispatch) => {
  dispatch({ type: postTypes.CLEAR_FORM });
};

export const updatePost = (id, post) => async (dispatch, getState) => {
  try {
    const {
      posts: { posts },
    } = getState();
    const { data } = await api.updatePost(id, post);
    console.log(data);
    const newPosts = posts.map((post) => (post._id === data._id ? data : post));
    dispatch({ type: postTypes.UPDATE, payload: newPosts });
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    const {
      posts: { posts },
    } = getState();
    console.log(id);
    await api.deletePost(id);
    const newPosts = posts.filter((post) => post._id !== id);
    dispatch({ type: postTypes.DELETE, payload: newPosts });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch, getState) => {
  try {
    const {
      posts: { posts },
    } = getState();
    const { data } = await api.likePost(id);
    console.log(data);
    const newPosts = posts.map((post) => (post._id === data._id ? data : post));

    dispatch({ type: postTypes.LIKE, payload: newPosts });
  } catch (error) {
    console.log(error.message);
  }
};
