import axios, { type AxiosInstance } from 'axios'
import type {
  GetTestCaseByIdResponse,
  getTestCaseStepParams,
  getTestCaseStepResponse,
  updateTestCaseStepByIdBody,
  updateTestCaseStepByIdResponse,
  createTestCaseStepBody,
  createTestCaseStepResponse,
  getTestCaseAttachmentsRequest,
  getTestCaseAttachmentsResponse,
  getTestCaseCommentRequest,
  getTestCaseCommentResponse,
  createTestCaseCommentBody,
  createTestCaseCommentResponse,
  updateTestCaseCommentBody,
  updateTestCaseCommentResponse
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


const getTestAttachments = async(
  params: getTestCaseAttachmentsRequest
): Promise <getTestCaseAttachmentsResponse> => {
  try {
    const response = await api.get(`/testcaseattachments`, {params})
    return response.data
  } catch (error){
    throw error
  }
}

const getTestCaseCommentsByTestCaseId = async(
  params: getTestCaseCommentRequest
): Promise <getTestCaseCommentResponse> => {
  try {
    const response = await api.get(`/testcasecomments`,{
      params
    })
    return response.data
  } catch (error){
    throw error
  }
}

const createTestCaseComment = async(
  body: createTestCaseCommentBody
): Promise <createTestCaseCommentResponse> => {
  try {
    const response = await api.post(`/testcasecomments`,body)
    return response.data
  } catch(error){
    throw error
  }
}

const updateTestCaseComment = async(
  commentId: number,
  body: updateTestCaseCommentBody
): Promise <updateTestCaseCommentResponse> => {
  try{
  const response = await api.put(`/testcasecomments/${commentId}`, body)
  return response.data
  } catch(error){
    throw error
  }
}

export {getTestCaseById, getTestCaseStepsByTestCaseId, updateTestCaseStepById, createTestCaseStep, getTestAttachments, getTestCaseCommentsByTestCaseId, createTestCaseComment, updateTestCaseComment}
