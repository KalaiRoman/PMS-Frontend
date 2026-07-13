import { loginUserApi } from "../../services/login-services";
import { toastSuccess } from "../../utils/toast/Toast";
import { setCookie } from "../../utils/tokens/TokenStorage";
import { loginFailed, loginRequest, loginSuccess } from "../reducers/LoginReducer"
const loginUser=(data,navigate)=>async(dispatch)=>{
    dispatch(loginRequest());
    try {
        const response=await loginUserApi(data);
        if(response?.data)
        {   
            setCookie(response?.data?.token);
            dispatch(loginSuccess(response?.data?.user));
            toastSuccess("User Login Successfully")
            setTimeout(() => {
            navigate("/dashboard");
                
            },1000);
        }
    } catch (error) {
        dispatch(loginFailed(error?.message));    }
}

export {loginUser};