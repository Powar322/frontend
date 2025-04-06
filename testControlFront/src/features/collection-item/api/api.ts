import axios, { type AxiosInstance } from 'axios'
import type {
  TestCaseCollectionParams,
  TestCaseCollectionResponse,
  TestCasesCollectionParams,
  TestCasesCollectionResponse,
  TestCasesNotInCollectionResponse,
  CreateTestCaseResponse,
  CreateTestCaseParams
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getCollectionById = async (
  params: TestCaseCollectionParams
): Promise<TestCaseCollectionResponse> => {
  try {
    const response = await api.get('/collections/getbyid', {
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCaseCollectionById = async (
  params: TestCasesCollectionParams
): Promise<TestCasesCollectionResponse> => {
  try {
    const response = await api.get('/testcases/getbyidcol', {
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCasesNotInCollection = async (
  params: TestCaseCollectionParams
): Promise <TestCasesNotInCollectionResponse> => {
  try {
    const response = await api.get('/collections/getnotincollection', {
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
    const response = await api.post('/testcases/create', {
      body
    })
    return response.data
  } catch (error){
    throw error
  }
}

export { getCollectionById, getTestCaseCollectionById, getTestCasesNotInCollection, createTestCase}
