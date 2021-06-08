import { GET_USERS } from "./Types";
import axios from "axios";

// GET ALL USERS
export const getUsers= () => (dispatch) => {

  axios
    .get("/")
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>console.log(err)    );
};
