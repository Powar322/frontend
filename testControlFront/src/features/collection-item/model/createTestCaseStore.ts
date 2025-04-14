import { defineStore } from 'pinia'
import { createTestCase } from '../api'

type CasePrefix = string | null
type CaseId = string | null
type FkCollectionId = number | null
type Name = string | null
type Description = string | null
type TestData = string | null


type State = {
  casePrefix: CasePrefix,
  caseId: CaseId,
  fkCollectionId: FkCollectionId,
  name: Name,
  description: Description,
  testData: TestData
}

export const useCreateTestCaseStore = defineStore('create-test-case', {
  state: (): State => ({
    casePrefix: "TS",
    caseId: null,
    fkCollectionId: null,
    name: null,
    description: null,
    testData: null
  }),
  actions:{
    setCasePrefix(casePrefix: CasePrefix){
      this.casePrefix = casePrefix
    },
    setCaseId(caseId: CaseId){
      this.caseId = caseId
    },
    setFkCollectionId(fkCollectionId: FkCollectionId){
      this.fkCollectionId = fkCollectionId
    },
    setName(name: Name){
      this.name = name
    },
    setDescription(description: Description){
      this.description = description
    },
    setTestData(testData: TestData){
      this.testData = testData
    },
    async createTestCase(){
      await createTestCase({
        testCaseId: this.casePrefix + this.caseId,
        fkCollectionId: this.fkCollectionId,
        testCaseName: this.name,
        description: this.description,
        testData: this.testData
      })
    }
  }
})
