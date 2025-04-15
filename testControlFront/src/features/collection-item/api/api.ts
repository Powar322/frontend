import axios, { type AxiosInstance } from 'axios'
import type {
  TestCaseCollectionResponse,
  TestCaseByIdResponse,
  TestCasesNotInCollectionParams,
  TestCasesNotInCollectionResponse,
  TestCasesByCollectionIdParams,
  TestCasesByCollectionIdResponse,
  CreateTestCaseResponse,
  CreateTestCaseParams,
  GetCollectionRunsByCollectionIdParams,
  GetCollectionRunsByCollectionIdResponse
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getTestCaseСollectionById = async (
  id: number
): Promise<TestCaseCollectionResponse> => {
  try {
    const response = await api.get(`/testCaseCollections/${id}`)
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCaseById = async (
  id: number
): Promise<TestCaseByIdResponse> => {
  try {
    const response = await api.get(`/testcases/${id}`)
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCasesByCollectionId = async (
  params: TestCasesByCollectionIdParams
): Promise<TestCasesByCollectionIdResponse> => {
  try {
    const response = await api.get(`/testcases`, {
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCasesNotInCollection = async (
  params: TestCasesNotInCollectionParams
): Promise <TestCasesNotInCollectionResponse> => {
  try {
    const response = await api.get(`/testcases`,{
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const createTestCase = async (
  body: CreateTestCaseParams
): Promise <CreateTestCaseResponse> => {
  try {
    const response = await api.post('/testcases', body)
    return response.data
  } catch (error){
    throw error
  }
}

const getCollectionRunsByCollectionId = async (
  params: GetCollectionRunsByCollectionIdParams
): Promise <GetCollectionRunsByCollectionIdResponse> => {
  try {
    const response = await api.get('/collectionRuns', {
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

export { getTestCaseСollectionById, getTestCasesByCollectionId, getTestCaseById, getTestCasesNotInCollection, createTestCase, getCollectionRunsByCollectionId}
