import api from "@/api/axios";
function usePutApi(endpoint, id, data) {
  if (!endpoint) {
    console.log("endpoint is missing");
  }
  if (!id) console.log("Id is missing");
  if (endpoint && id) {
    const response = api.put(`${endpoint}/${id}`, data);
    if (response) {
      return response;
    }
  }
}
export default usePutApi;
