import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch (fetchPosts ());
  const userIds = _.uniq (_.map (getState ().posts, 'userId'));

  // userIds.forEach (id => dispatch (fetchUsers (id)));

  _.chain (getState ().posts)
    .map ('userId')
    .uniq ()
    .forEach (id => dispatch (fetchUsers (id)))
    .value ();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get ('/posts');
  dispatch ({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUsers = id => async dispatch => {
  const response = await jsonPlaceholder.get (`/users/${id}`);
  dispatch ({type: 'FETCH_USER', payload: response});
};

// export const fetchUsers = id => dispatch => _fetchUsers (id, dispatch);

// const _fetchUsers = _.memoize (async (id, dispatch) => {
//   const response = await jsonPlaceholder.get (`/users/${id}`);
//   dispatch ({type: 'FETCH_USER', payload: response});
// });
