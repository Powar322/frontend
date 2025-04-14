import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseByIdResponse,
  getTestCaseStepParams,
  getTestCaseStepResponse
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getTestCaseById = async (
  id: number
): Promise <GetTestCaseByIdResponse> => {
  try{
    const response = await api.get(`/testcases/${id}`)
    return response.data
  }catch(error){
    throw error
  }
}

const getTestCaseStepsByTestCaseId = async (
  params: getTestCaseStepParams
): Promise <getTestCaseStepResponse> => {
  try{
    const response = await api.get(`/steps`,{
      params
    })
    return response.data
  }catch(error){
    throw error
  }
}

export {getTestCaseById, getTestCaseStepsByTestCaseId}
