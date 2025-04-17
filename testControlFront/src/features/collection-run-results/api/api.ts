import axios, { type AxiosInstance } from 'axios'
import type {
  TestCaseCollectionRunResponse,
  TestCaseCollectionRunStatsResponse,
  TestCaseCollectionRunResultsForTCParams,
  TestCaseCollectionRunResultsForTCResponse,
  TestCaseCollectionRunResultsForTCResultBody,
  TestCaseCollectionRunResultsForTCResultResponse,
  updateTestCaseCollectionRunResultsBody,
  updateTestCaseCollectionRunResultsResponse
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

const getTestCaseCollectionRunResultsForTC = async (
  params: TestCaseCollectionRunResultsForTCParams
): Promise<TestCaseCollectionRunResultsForTCResponse[]> => {
  try {
    const response = await api.get(`/collectionRunsResult`, {
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const updateTestCaseCollectionRunResultsForTCResult = async (
  resultForTCId: number,
  body: TestCaseCollectionRunResultsForTCResultBody
): Promise<TestCaseCollectionRunResultsForTCResultResponse> => {
  try {
    const response = await api.put(`/collectionRunsResult/${resultForTCId}`, body)
    return response.data
  } catch (error){
    throw error
  }
}

const updateTestCaseCollectionRunResultsResult = async (
  resultId: number,
  body: updateTestCaseCollectionRunResultsBody
): Promise<updateTestCaseCollectionRunResultsResponse> => {
  try {
    const response = await api.put(`/collectionRuns/${resultId}`, body)
    return response.data
  } catch (error){
    throw error
  }
}

export {getTestCaseCollectionRunById, getTestCaseCollectionRunStatsById, getTestCaseCollectionRunResultsForTC, updateTestCaseCollectionRunResultsForTCResult, updateTestCaseCollectionRunResultsResult }
