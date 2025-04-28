import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseCollectionsResponse,
  DeleteTestCaseCollectionsResponse,
  CreateTestCaseCollectionParams,
  CreateTestCaseCollectionsResponse
} from './types.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const getTestCaseCollections = async (): Promise<GetTestCaseCollectionsResponse> => {
  try {
    const response = await api.get('/testCaseCollections')
    return response.data
  } catch (error){
    throw error
  }
}

const deleteTestCaseCollection = async (
  id: number
): Promise<DeleteTestCaseCollectionsResponse> => {
  try {
    const response = await api.delete(`/testCaseCollections/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

const createTestCaseCollection = async (
  body: CreateTestCaseCollectionParams,
): Promise<CreateTestCaseCollectionsResponse> =>{
  try{
    const response = await api.post(`/testCaseCollections`, body)
    return response.data
  } catch (error) {
    throw error
  }
}

export {getTestCaseCollections, deleteTestCaseCollection, createTestCaseCollection}
