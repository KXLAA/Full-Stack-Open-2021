import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (numObj) => {
  const request = axios.post(baseUrl, numObj);
  return request.then((response) => response.data);
};

const deleteNum = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

const update = (id, numObj) => {
  const request = axios.put(`${baseUrl}/${id}`, numObj);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  deleteNum,
  update,
};
