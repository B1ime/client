import {
  GOOGLE_LOGIN_SUCCESSFUL,
  KAKAO_LOGIN_SUCCESSFUL,
} from '../actions/login/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESSFUL:
    case KAKAO_LOGIN_SUCCESSFUL:
      return {
        token: action.token,
        username: action.username,
      };
    default:
      return state;
  }
}
