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
  notDo: number
}

export type TestCaseCollectionRunResultsForTCParams = {
  collectionRunId: number
}

export type TestCaseCollectionRunResultsForTCResponse = {
  id: number | null,
  resTestCaseId: number | null,
  testCaseId: string | null,
  testCaseDescription: string | null,
  collectionRunId: number | null,
  resultId: number | null,
  resultName: string | null,
}

export type TestCaseCollectionRunResultsForTCResultBody = {
  resultId: number
}

export type TestCaseCollectionRunResultsForTCResultResponse = {
  message: string
}

export type updateTestCaseCollectionRunResultsBody = {
  collectionId: number,
  resultId: number,
  dateOfRun: string
}

export type updateTestCaseCollectionRunResultsResponse = {
  message: string
}
