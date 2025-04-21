import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseByIdResponse,
  getTestCaseStepParams,
  getTestCaseStepResponse,
  updateTestCaseStepByIdBody,
  updateTestCaseStepByIdResponse,
  createTestCaseStepBody,
  createTestCaseStepResponse
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

const updateTestCaseStepById = async (
  id: number,
  body: updateTestCaseStepByIdBody
): Promise <updateTestCaseStepByIdResponse> => {
  try{
    const response = await api.put(`/steps/${id}`, body)
    return response.data
  }catch(error){
    throw error
  }
}

const createTestCaseStep = async(
  body: createTestCaseStepBody
): Promise <createTestCaseStepResponse> => {
  try{
    const response = await api.post(`/steps`,body)
    return response.data
  } catch (error){
    throw error
  }
}

export {getTestCaseById, getTestCaseStepsByTestCaseId, updateTestCaseStepById, createTestCaseStep}
