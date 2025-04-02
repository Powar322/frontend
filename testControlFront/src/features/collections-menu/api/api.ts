import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseCollectionsResponse,
  TestCaseCollectionDeleteParams,
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

const getAllCollections = async (): Promise<GetTestCaseCollectionsResponse> => {
  try {
    const response = await api.get('/collections/get')
    return response.data
  } catch (error){
    throw error
  }
}

const deleteCollection = async (
  params: TestCaseCollectionDeleteParams,
): Promise<DeleteTestCaseCollectionsResponse> => {
  try {
    const response = await api.delete(`/collections/delete`, {
      params
    })
    return response.data
  } catch (error) {
    throw error
  }
}

const createCollection = async (
  body: CreateTestCaseCollectionParams,
): Promise<CreateTestCaseCollectionsResponse> =>{
  try{
    const response = await api.post(`/collections/create`, body)
    return response.data
  } catch (error) {
    throw error
  }
}

export {getAllCollections, deleteCollection, createCollection}
