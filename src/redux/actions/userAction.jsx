import { chatUsers } from "../../services/chat-services";
import { userFail, userRequest, userSuccess } from "../reducers/userReducers";

const getUsers = () => async dispatch => {
  dispatch(userRequest());
  try {
    const response=await chatUsers();

    console.log(response,"response")
    if(response){
        dispatch(userSuccess(response?.data?.data))
    }
  } catch (error) {
    dispatch(userFail(error));
  }
};

export {getUsers}