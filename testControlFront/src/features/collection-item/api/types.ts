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
type TestCases = TestCase | null

export type TestCaseCollectionResponse = {
  id: Id,
  name: Name,
  description: Description,
  project: Project
}

export type TestCasesByCollectionIdParams = {
  collectionId: number
}

export type TestCasesByCollectionIdResponse = {
  testCases: TestCases[]
}

export type TestCaseByIdResponse = {
  testCase: TestCase
}

export type TestCasesNotInCollectionParams = {
  excludeCollectionId: number
}

export type TestCasesNotInCollectionResponse = {
  testCases: TestCases[]
}

export type CreateTestCaseResponse = {
  status: number,
  message: string
}

export type CreateTestCaseParams = {
  testCaseId: string | null,
  fkCollectionId: number | null,
  testCaseName: string | null,
  description: string | null,
  testData: string | null
}

export type GetCollectionRunsByCollectionIdParams = {
  collectionId: number
}

export type GetCollectionRunsByCollectionIdResponse = {
  id: number,
  collectionId: number,
  resultId: number,
  resultName: string,
  dateOfRun: string
}

export type createTestCaseCollectionRunBody = {
  collectionId: number,
  dateOfRun: string
}

export type createTestCaseCollectionRunResponse = {
  id: number,
  collectionId: number,
  resultId: number,
  resultName: string,
  dateOfRun: string
}
