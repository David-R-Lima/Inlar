import axios, { AxiosError } from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})


api.interceptors.response.use(
    function (response) {
      return response
    },
    function (error: AxiosError) {  
      return Promise.reject(error)
    },
  )