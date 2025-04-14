import { defineStore } from 'pinia'
import { getTestCaseСollectionById, getTestCasesByCollectionId } from '../api'

type TestCase = {
  id: number
  testCaseId: string
  testCaseCollectionId: number
  testCaseCollectionName: string
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
      const { id, name, description, project } = await getTestCaseСollectionById( colId )
      this.id = id
      this.name = name
      this.description = description
      this.project = project

      this.testCases = await getTestCasesByCollectionId({
        collectionId: colId
      })
    }
  }
})
