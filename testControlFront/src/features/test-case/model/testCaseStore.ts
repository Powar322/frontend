import { defineStore } from 'pinia'
import {getTestCaseById, getTestCaseStepsByTestCaseId} from '../api'

type TestCaseStep = {
  id: number
  testCaseId: number
  numberOfStep: number
  step: string
}

type Id = number | null
type TestCaseId = string | null
type TestCaseCollectionId = number | null
type TestCaseCollectionName = string | null
type TestCaseName = string | null
type Description = string | null
type TestData = string | null



type State = {
  id: Id
  testCaseId: TestCaseId
  testCaseCollectionId: TestCaseCollectionId
  testCaseCollectionName: TestCaseCollectionName
  testCaseName: TestCaseName
  description: Description
  testData: TestData
  steps: Array<TestCaseStep> | []
}

export const useTestCaseStore = defineStore('test-case', {
  state: (): State => ({
    id: null,
    testCaseId: null,
    testCaseCollectionId: null,
    testCaseCollectionName: null,
    testCaseName: null,
    description: null,
    testData: null,
    steps: []
  }),
  actions:{
    async getTestCase(testCaseIdRequest: number){
      const {id, testCaseId, testCaseCollectionId, testCaseCollectionName, testCaseName, description, testData  } = await getTestCaseById(testCaseIdRequest)
      this.id = id
      this.testCaseId = testCaseId
      this.testCaseCollectionId = testCaseCollectionId
      this.testCaseCollectionName = testCaseCollectionName
      this.testCaseName = testCaseName
      this.description = description
      this.testData = testData

      this.steps = await getTestCaseStepsByTestCaseId({
        testCaseId: testCaseIdRequest
      })
    }
  }
})
