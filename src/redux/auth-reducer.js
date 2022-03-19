import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOG_OUT = "LOG_OUT";

let defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        currentUser: action.currentUser,
        isAuth: true,
      };
    case LOG_OUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    default:
      return state;
  }
}

export const setAuthUserDataAC = (user) => ({ type: SET_USER_DATA, currentUser: user });
export const logOutAC = () => ({type: LOG_OUT});

export const signup = (name, secondName, email, password, gender) => {
    return async (dispatch) =>{
        try {
            let response = await authAPI.signup(name, secondName, email, password, gender)
        } catch (error) {
            console.log(error);
        }
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            let response = await authAPI.login(email, password)
            dispatch(setAuthUserDataAC(response.data.values.user))
            localStorage.setItem("token", response.data.values.token)
        } catch (error) {
            console.log(error);
        }
    }
}