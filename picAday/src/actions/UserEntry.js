import {
  GET_ALL_USER_ENTRY,
  CREATE_USER_ENTRY,
  UPDATE_USER_ENTRY_BY_ID,
  GET_USER_ENTRY_BY_ID,
  GET_SUMMARY_DATA,
} from './Types';

import axios from 'axios';
import config from '../config';
const url = config.url + 'entry';
console.log('url', url);

export const getAllUserEntry = () => async dispatch => {
  return axios
    .get(url+'/all-entry', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':"*"
      },
    })
    .then(res => {
      dispatch({
        type: GET_ALL_USER_ENTRY,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log('error from action', err);
      // dispatch({type: ERROR, payload: err.response.data.message});
    });
};
export const createUserEntry = newData => dispatch => {

  return axios
    .post(url + '/create-entry', newData)
    .then(res => {
      dispatch({
        type: CREATE_USER_ENTRY,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log('error from action', err);
      // dispatch({type: ERROR, payload: err.response.data.message});
    });
};
export const updateUserEntryById = data => dispatch => {

  return axios
    .put(url + '/update-entry', data)
    .then(res => {
      dispatch({
        type: UPDATE_USER_ENTRY_BY_ID,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log('error from action', err);
      // dispatch({type: ERROR, payload: err.response.data.message});
    });
};

// get user entry by id
export const getUserEntryById = data => dispatch => {

  return axios
    .get(url + '/get-entry/' + data)
    .then(res => {
      dispatch({
        type: GET_USER_ENTRY_BY_ID,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log('error from action', err);
      // dispatch({type: ERROR, payload: err.response.data.message});
    });
};

//fetching the summary data
export const getSummaryData = () => dispatch => {

  return axios
    .get(url + '/get-summary')
    .then(res => {
      dispatch({
        type: GET_SUMMARY_DATA,
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log('error from action', err);
      // dispatch({type: ERROR, payload: err.response.data.message});
    });
};
