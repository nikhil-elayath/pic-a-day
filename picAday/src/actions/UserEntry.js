import {
    GET_ALL_USER_ENTRY,
    CREATE_USER_ENTRY
  } from './Types';

  import axios from 'axios';
  import config from '../config';
const url = config.url + 'entry';


export const getAllUserEntry = () => async dispatch => {
    return axios
      .get(url + '/all-entry',)
      .then(res => {
        dispatch({
          type: GET_ALL_USER_ENTRY,
          payload: res.data.data,
        });
      })
      .catch(err => {
          console.log("error from action", err)
        // dispatch({type: ERROR, payload: err.response.data.message});
      });
  };
export const createUserEntry = newData =>  dispatch => {
  console.log("create user entry actions", newData)

    return axios
    .post(url + "/create-entry", newData)
      .then(res => {
        dispatch({
          type: CREATE_USER_ENTRY,
          payload: res.data.data,
        });
      })
      .catch(err => {
          console.log("error from action", err)
        // dispatch({type: ERROR, payload: err.response.data.message});
      });
  };