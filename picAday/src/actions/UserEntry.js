import {
  GET_ALL_USER_ENTRY,
  CREATE_USER_ENTRY,
  UPDATE_USER_ENTRY_BY_ID,
  GET_USER_ENTRY_BY_ID,
  GET_SUMMARY_DATA,
  ERROR,
} from './Types';

import axios from 'axios';
import config from '../config';
const url = config.url + 'entry';

// action that will fetch all the user entries from the data base
// takes no parameter
export const getAllUserEntry = () => async dispatch => {
  return axios
    .get(url + '/all-entry')
    .then(res => {
      dispatch({
        type: GET_ALL_USER_ENTRY,
        payload: res.data.data,
      });
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
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
      dispatch({type: ERROR, payload: err});
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
      dispatch({type: ERROR, payload: err});
    });
};

// get user entry by id
export const getUserEntryById = data => dispatch => {
  console.log('get user ', data);

  return axios
    .get(url + '/get-entry/' + data)
    .then(res => {
      dispatch({
        type: GET_USER_ENTRY_BY_ID,
        payload: res.data.data,
      });
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
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
      dispatch({type: ERROR, payload: err});
    });
};
