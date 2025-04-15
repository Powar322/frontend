export type TestCaseCollectionRunResponse = {
  id: number,
  collectionId: number,
  resultId: number,
  resultName: string,
  dateOfRun: string
}

export type TestCaseCollectionRunStatsResponse = {
  total: number,
  passed: number,
  failed: number,
  inProgress: number,
}
