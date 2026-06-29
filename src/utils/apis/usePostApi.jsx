import api from "@/api/axios";
function usePostApi(endpoint, data) {
  if (!endpoint) {
    return console.log("endpoint is missing");
  }
  if (endpoint) {
    const response = api.post(`${endpoint}`, data);
    if (response) {
      return response;
    }
  }
}
export default usePostApi;
