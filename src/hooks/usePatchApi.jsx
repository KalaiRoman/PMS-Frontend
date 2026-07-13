import api from "@/api/axios";
function usePatchApi(endpoint, id, data) {
  if (!endpoint) {
    console.log("endpoint is missing");
  }
  if (!id) console.log("Id is missing");
  if (endpoint && id) {
    const response = api.patcht(`${endpoint}/${id}`, data);
    if (response) {
      return response;
    }
  }
}
export default usePatchApi;
