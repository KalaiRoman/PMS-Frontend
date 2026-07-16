import apiEndPoint from "../api/endpoints";
import useGetApi from "../hooks/useGetApi";

export const getProjectService = () => {
  return useGetApi(apiEndPoint.projects, "", "");
};
