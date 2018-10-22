import {
  GOOGLE_LOGIN_FAILED,
  GOOGLE_LOGIN_SUCCESSFUL,
  START_GOOGLE_LOGIN,
} from './actionTypes';


export const startGoogleLogin = () => ({ type: START_GOOGLE_LOGIN });
export const googleLoginSuccessful = (token, username) => ({
  type: GOOGLE_LOGIN_SUCCESSFUL,
  token,
  username,
});
export const googleLoginFailed = () => ({ type: GOOGLE_LOGIN_FAILED });

export const executeLogin = (userID, username) => async dispatch => {
  dispatch(startGoogleLogin());
  try {
    console.log(userID);
    console.log(username);
    dispatch(googleLoginSuccessful(userID, username));
  } catch (err) {
    dispatch(googleLoginFailed());
  }
};
