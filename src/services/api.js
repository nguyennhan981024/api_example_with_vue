import axios from 'axios'

const api = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com",
});
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



export const services = {
  // api get posts
  getPosts : () => api.get("/posts"),
}

export default services;
