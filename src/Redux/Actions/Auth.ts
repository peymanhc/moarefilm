import { AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT } from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
export interface AUTHLogOut {
  type: typeof AUTH_LOGOUT;
}
export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  data: any;
  reqToken: any;
  statusTxt: string;
}
export interface AuthFaill {
  type: typeof AUTH_FAIL;
  error: string;
}
export const AuthLogOut = (): AUTHLogOut => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const AuthSuccess = (
  data: any,
  reqToken: any,
  statusTxt: string
): AuthSuccess => {
  return {
    type: AUTH_SUCCESS,
    data: data,
    reqToken: reqToken,
    statusTxt: statusTxt,
  };
};

export const AuthFaill = (error: string): AuthFaill => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const doLogin = (data: any) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        const req_token = res.data.request_token;
        const Status = res.statusText;
        dispatch(AuthSuccess(null, req_token, Status));
        Object.assign(data, { request_token: req_token });
        axios
          .post(
            `/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`,
            data
          )
          .then((res) => {
            dispatch(AuthSuccess(data, req_token, Status));
            axios
              .post(
                `/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
                data
              )
              .then((res) => {
                localStorage.setItem("session_id", res.data.session_id);
                toast.dark(res.data.status_message, {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                axios
                  .get(
                    `/account?api_key=${process.env.REACT_APP_API_KEY}&session_id=${res.data.session_id}`
                  )
                  .then((res) => {
                    dispatch(AuthSuccess(res.data, req_token, Status));
                    toast.success(`Wellcome Back ${res.data.username} 💋`, {
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  })
                  .then(() => {
                    setTimeout(() => {
                      window.location.replace("https://localhost:3000");
                    }, 3000);
                  });
              });
          })
          .catch((err: any) => {
            toast.error("Some thing went Wrong", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      });
  };
};
