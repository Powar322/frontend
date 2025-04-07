import { defineStore } from 'pinia'
import { getCollectionById, getTestCaseCollectionById } from '../api'

type TestCase = {
  id: number
  caseId: string
  colName: string
  description: string
  testCaseName: string
  testData: string
}

type Id = number | null
type Name = string | null
type Description = string | null
type Project = string | null
type TestCases = Array<TestCase> | null

type State = {
  id: Id,
  name: Name,
  description: Description,
  project: Project,
  testCases: TestCases
}

export const useCollectionItemStore = defineStore('collection-item', {
  state: (): State => ({
    id: null,
    name: null,
    description: null,
    project: null,
    testCases: []
  }),
  actions:{
    async getCollections(colId: number){
      const { id, name, description, project } = await getCollectionById({
        id: colId
      })
      this.id = id
      this.name = name
      this.description = description
      this.project = project

      this.testCases = await getTestCaseCollectionById({
        colId: colId
      })
      console.log(this.testCases)
    }
  }
})
