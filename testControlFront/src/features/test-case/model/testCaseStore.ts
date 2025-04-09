import { defineStore } from 'pinia'
import {getTestCaseById, getTestCaseStepsById} from '../api'

type TestCaseStep = {
  id: number
  testCaseId: number
  numberOfStep: number
  step: string
}

type Id = number | null
type CaseId = string | null
type ColId = number | null
type ColName = string | null
type TestName = string | null
type Description = string | null
type TestData = string | null


type State = {
  id: Id
  caseId: CaseId
  colId: ColId
  colName: ColName
  testName: TestName
  description: Description
  testData: TestData
  steps: Array<TestCaseStep> | []
}

export const useTestCaseStore = defineStore('test-case', {
  state: (): State => ({
    id: null,
    caseId: null,
    colId: null,
    colName: null,
    testName: null,
    description: null,
    testData: null,
    steps: []
  }),
  actions:{
    async getTestCase(testCaseId: number){
      const {id, caseId, colId, colName, testName, description, testData  } = await getTestCaseById({
        id: testCaseId
      })
      this.id = id
      this.caseId = caseId
      this.colId = colId
      this.colName = colName
      this.testName = testName
      this.description = description
      this.testData = testData

      this.steps = await getTestCaseStepsById({
        id: testCaseId
      })
    }
  }
})
