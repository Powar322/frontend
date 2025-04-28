import { defineStore } from 'pinia'
import { getTestCaseCollections } from '../api'
type TestCaseCollection = {
  id: number,
  name: string,
  description: string,
  project: string
}

type TestCaseCollections = Array<TestCaseCollection> | null

type State = {
  testCaseCollections: TestCaseCollections
}

export const useTestCaseCollectionsStore = defineStore('test-case-collections', {
  state: (): State => ({
    testCaseCollections: []
  }),
  actions:{
    async getAllTestCaseCollection(){
      this.testCaseCollections = await getTestCaseCollections()
    }
  }
})
