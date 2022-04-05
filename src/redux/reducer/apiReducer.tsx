import * as constants from '../constants';

import {apiDataSetUpDispatchTypes} from '../constants';

const intialState = {
  isLoading: true,
  responseData: null,
};

const apiReducer = (state = intialState, action: apiDataSetUpDispatchTypes) => {
  switch (action.type) {
    case constants.SET_RESPONSE_DATA_LOADER: {
      return {
        ...state,
        isLoading: action.loading,
      };
    }
    case constants.GET_RESPONSE_DATA: {
      return {
        ...state,
      };
    }
    case constants.SET_RESPONSE_DATA: {
      console.log(
        'action data in response' + JSON.stringify(action.responseData),
      );
      return {
        ...state,
        responseData: action.responseData,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default apiReducer;
