import api from "@/api/axios";

function useGetApi(endpoint,id, search, page, limit) {
  let url = endpoint;
  if (limit && page && search) {
    url = `${endpoint}?search=${search}&limit=${limit}&page=${page}`;
  } else if (search) {
    url = `${endpoint}?search=${search}`;
  } else if (limit || page) {
    url = `${endpoint}?limit=${limit}&page=${page}`;
  } else if (id) {
    url = `${endpoint}/${id}`;
  }
  if (url) {
    const response = api.get(url);
    if (response) {
      return response;
    }
  }
}
export default useGetApi;
