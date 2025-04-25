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

export type updateTestCaseStepByIdBody = {
  step: string
}

export type updateTestCaseStepByIdResponse = {
  message: string
}

export type createTestCaseStepBody = {
  FKTestCaseId: number,
  numberOfStep: number,
  step: string
}

export type createTestCaseStepResponse = {
  id: number
  testCaseId: number
  numberOfStep: number
  step: string
}

export type uploadTestCaseAttachmentsBody = {
  testCaseId: number
  isImg: boolean
  file: any
}

export type uploadTestCaseAttachmentsRequest = {
  id: number
  testCaseId: number
  isImg: boolean
  fileSize: number
  mimetype: string
}

type Attachment = {
  id: number,
  testCaseId: number,
  isImg: boolean,
  url: string
}

export type getTestCaseAttachmentsRequest = {
  testCaseId: number
}


export type getTestCaseAttachmentsResponse = {
  success: boolean
  count: number
  attachments: Attachment[]
}

export type getTestCaseCommentRequest = {
  testCaseId: number
}

type Comment = {
  id: number
  testCaseId: number
  text: string
  date: string
}

export type getTestCaseCommentResponse = {
  comments: Comment[]
}

export type createTestCaseCommentBody = {
  testCaseId: number
  text: string
  date: string
}

export type createTestCaseCommentResponse = {
  id: number
  testCaseId: number
  text: string
  date: string
}

export type updateTestCaseCommentBody = {
  text: string
}

export type updateTestCaseCommentResponse = {
  id: number
  testCaseId: number
  text: string
  date: string
}
