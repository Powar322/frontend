export type TestCaseCollection = {
  id: number,
  name: string,
  description: string,
  project: string
}

export type GetTestCaseCollectionsResponse = {
  testCaseCollections: TestCaseCollection[]
}

export type TestCaseCollectionDeleteParams = {
  id: number
}

export type DeleteTestCaseCollectionsResponse = {
  message: string
}

export type CreateTestCaseCollectionParams = {
  name: string | null,
  description: string | null,
  project: string | null
}

export type CreateTestCaseCollectionsResponse = {
  status: number,
  message: string
}
