import axios from "axios";
import store from "../store";
import { ActionTypes } from "./ActionTypes";

export const allCapsules = async () => {
  store.dispatch({ type: ActionTypes.ALL_CAPSULES_REFRESH });

  var config = {
    method: "get",
    url: "https://api.spacexdata.com/v3/capsules",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      store.dispatch({
        type: ActionTypes.ALL_CAPSULES,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
