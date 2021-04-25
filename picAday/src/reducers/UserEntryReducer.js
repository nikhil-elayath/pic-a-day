import {
  GET_ALL_USER_ENTRY,
  CREATE_USER_ENTRY,
  GET_USER_ENTRY_BY_ID,
  GET_SUMMARY_DATA,
} from '../actions/Types';

const initalState = {
  userEntry: [],
  userEntryId: '',
  specificUserEntry: [],
  summaryData: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ALL_USER_ENTRY:
      return {
        ...state,
        userEntry: action.payload,
      };
    case CREATE_USER_ENTRY:
      return {
        ...state,
        userEntryId: action.payload,
      };
    case GET_USER_ENTRY_BY_ID:
      return {
        ...state,
        specificUserEntry: action.payload,
      };
    case GET_SUMMARY_DATA:
      return {
        ...state,
        summaryData: action.payload,
      };
    default:
      return state;
  }
}
