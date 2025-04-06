import { defineStore } from 'pinia'
import {getTestCasesNotInCollection } from '../api'

type TestCase = {
  id: number
  caseId: string
  colName: string
  description: string
  testCaseName: string
  testData: string
}

type TestCases = Array<TestCase> | null

type State = {

  testCases: TestCases
}
export const useNotInCollectionItemStore = defineStore('not-in-collection-item', {
  state: (): State => ({
    testCases: []
  }),
  actions: {
    async getNotInCollection(id: number){
      this.testCases = await getTestCasesNotInCollection({
        id: id
      })
    }
  }
})
