export type GetTestCaseByIdParams = {
  id: number
}

export type GetTestCaseByIdResponse = {
  id: number
  testCaseId: string
  testCaseCollectionId: number
  testCaseCollectionName: string
  description: string
  testCaseName: string
  testData: string
}

type TestCaseStep = {
  id: number
  testCaseId: number
  numberOfStep: number
  step: string
}

export type getTestCaseStepParams = {
  testCaseId: number
}

export type getTestCaseStepResponse = {
  testCaseStep: TestCaseStep[]
}

