import axios, { type AxiosInstance } from 'axios'
import type {
  TestCaseCollectionRunResponse,
  TestCaseCollectionRunStatsResponse
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getTestCaseCollectionRunById = async (
  testCaseCollectionRunId: number
): Promise <TestCaseCollectionRunResponse> => {
  try {
    const response = await api.get(`/collectionRuns/${testCaseCollectionRunId}`)
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCaseCollectionRunStatsById = async (
  testCaseCollectionRunId: number
): Promise <TestCaseCollectionRunStatsResponse> => {
  try {
    const response = await api.get(`/collectionRuns/${testCaseCollectionRunId}/stats`)
    return response.data
  } catch (error){
    throw error
  }
}


export {getTestCaseCollectionRunById, getTestCaseCollectionRunStatsById }
