import samuraiAPI from "../service/samuraiAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL" ;

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const getCaptcha = (captchaUrl) => ({
  type: GET_CAPTCHA_URL, payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await samuraiAPI.auth();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true),);
  }
};

export const logIn = (email, password, rememberMe, captcha ) => async (dispatch) => {
  const response = await samuraiAPI.logIn(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if(response.data.resultCode === 10){
    dispatch(getCapthchaURL())
    }
  }
};

export const logout = () => async (dispatch) => {
  const response = await samuraiAPI.logOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCapthchaURL = () => async (dispatch) => {
  const response = await samuraiAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
    dispatch(getCaptcha(captchaUrl));
};

export default authReducer;
