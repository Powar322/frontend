import { defineStore } from 'pinia'
import { getTestCaseCollectionRunById,
  getTestCaseCollectionRunStatsById,
  getTestCaseCollectionRunResultsForTC} from '../api'

type Stats = {
  total: number,
  passed: number,
  failed: number,
  inProgress: number,
  notDo: number
} | {}

type TestCasesResults = {
  id: number | null,
  resTestCaseId: number | null,
  testCaseId: string | null,
  testCaseDescription: string | null,
  collectionRunId: number | null,
  resultId: number | null,
  resultName: string | null
}

type Id = number | null
type CollectionId = number | null
type ResultId = number | null
type ResultName = string | null
type DateOfRun = string | null
type TestCasesResultsArr = TestCasesResults[] | []


type State = {
  id: Id,
  collectionId: CollectionId,
  resultId: ResultId,
  resultName: ResultName,
  dateOfRun: DateOfRun,
  stats: Stats
  testCasesResults: TestCasesResultsArr
}

export const useCollectionRunStore = defineStore('collection-run', {
  state: (): State => ({
    id: null,
    collectionId: null,
    resultId: null,
    resultName: null,
    dateOfRun: null,
    stats: {},
    testCasesResults: []
  }),
  actions: {
    async getTestCaseCollectionRunId(testCaseCollectionRunId: number){
      const {id, collectionId, resultId, resultName, dateOfRun} = await getTestCaseCollectionRunById(testCaseCollectionRunId)
      this.id = id
      this.collectionId = collectionId
      this.resultId = resultId
      this.resultName = resultName
      this.dateOfRun = dateOfRun

      this.stats = await getTestCaseCollectionRunStatsById(testCaseCollectionRunId)

      this.testCasesResults = await getTestCaseCollectionRunResultsForTC({
        collectionRunId: testCaseCollectionRunId
      })
    }
  }
})
