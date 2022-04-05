export const GET_RESPONSE_DATA = 'GET_RESPONSE_DATA';
export const SET_RESPONSE_DATA = 'SET_RESPONSE_DATA';
export const SET_RESPONSE_DATA_LOADER = 'SET_RESPONSE_DATA_LOADER';

export interface getResponseData {
  type: typeof GET_RESPONSE_DATA;
}

export interface setResponseData {
  type: typeof SET_RESPONSE_DATA;
  responseData: any;
}

export interface setResponseDataLoader {
  type: typeof SET_RESPONSE_DATA_LOADER;
  loading: boolean;
}
export type apiDataSetUpDispatchTypes =
  | getResponseData
  | setResponseData
  | setResponseDataLoader;
