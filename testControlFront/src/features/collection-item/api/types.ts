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
type TestCases = TestCase | null

export type TestCaseCollectionParams = {
  id: number
}

export type TestCaseCollectionResponse = {
  id: Id,
  name: Name,
  description: Description,
  project: Project
}

export type TestCasesCollectionParams = {
  colId: number
}

export type TestCasesCollectionResponse = {
  testCases: TestCases[]
}

export type TestCasesNotInCollectionResponse = {
  testCases: TestCases[]
}

export type CreateTestCaseResponse = {
  status: number,
  message: string
}

export type CreateTestCaseParams = {
  caseId: string | null,
  fkCollectionId: number | null,
  name: string | null,
  description: string | null,
  testData: string | null
}
