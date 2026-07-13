import apiEndPoint from '../api/endpoints';
import usePostApi from '../hooks/usePostApi';
const loginUserApi=(data)=>{
    return usePostApi(apiEndPoint?.login,data)
}

export {loginUserApi};