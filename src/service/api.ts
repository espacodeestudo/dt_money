import axios from 'axios'


const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5173/api'
    : 'https://dtmoneys.netlify.app/api'


export const api = axios.create({
    baseURL
})