import apiEndPoint from "../api/endpoints"
import useGetApi from './../hooks/useGetApi';

export const chatUsers=()=>{
    return useGetApi(apiEndPoint?.users,"","")
}