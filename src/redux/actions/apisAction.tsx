import * as constants from '../constants';

export const geApiDataAction = () => ({
  type: constants.GET_RESPONSE_DATA,
});

export const setactionApiData = (responseData: any) => ({
  type: constants.SET_RESPONSE_DATA,
  responseData,
});

export const setResponseLoaderAction = (loading: boolean) => ({
  type: constants.SET_RESPONSE_DATA_LOADER,
  loading,
});
