export type GetTestCaseByIdParams = {
  id: number
}

  export type GetTestCaseByIdResponse = {
  id: number
  caseId: string
  colId: number
  colName: string
  testName: string
  description: string
  testData: string
}

type TestCaseStep = {
  id: number
  testCaseId: number
  numberOfStep: number
  step: string
}

export type TestCaseStepResponse = {
  testCaseStep: TestCaseStep[]
}

export type TestCaseStepParams = {
  id: number
}
