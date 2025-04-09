import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseByIdParams,
  GetTestCaseByIdResponse,
  TestCaseStepResponse,
  TestCaseStepParams
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getTestCaseById = async (
  params: GetTestCaseByIdParams
): Promise <GetTestCaseByIdResponse> => {
  try{
    const response = await api.get('/testcases/getbyid', {
      params
    })
    return response.data
  }catch(error){
    throw error
  }
}

const getTestCaseStepsById = async (
  params: TestCaseStepParams
): Promise <TestCaseStepResponse> => {
  try{
    const response = await api.get('/testcases/getStepsByIdtestCase', {
      params
    })
    return response.data
  }catch(error){
    throw error
  }
}

export {getTestCaseById, getTestCaseStepsById}
