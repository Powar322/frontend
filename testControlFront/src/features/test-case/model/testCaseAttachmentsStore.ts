import { defineStore } from 'pinia'
import { getTestAttachments } from '../api'

type Attachment = {
  id: number,
  testCaseId: number,
  isImg: boolean,
  url: string
}

type Success = boolean | null
type Count = number | null
type Attachments = Attachment[] | []


type State = {
  success: Success
  count: Count
  attachments: Attachments
}

export const useTestCaseAttachmentStore = defineStore('test-case-attachments', {
  state: (): State => ({
    success: null,
    count: null,
    attachments: []
  }),
  actions:{
    async getAllAttachments(testCaseId: number){
      const {success, count, attachments} = await getTestAttachments({
        testCaseId: testCaseId
      })
      this.success = success
      this.count = count
      this.attachments = attachments
    }
  }
})
