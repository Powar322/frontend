import { defineStore } from 'pinia'
import { getTestAttachments, getTestCaseCommentsByTestCaseId } from '../api'

type Comment = {
  id: number,
  testCaseId: number,
  text: boolean,
  date: string
}

type Comments = Comment[] | []


type State = {
  comments: Comments
}

export const useTestCaseCommentsStore = defineStore('test-case-comments', {
  state: (): State => ({
    comments: []
  }),
  actions:{
    async getTestCaseCommentsByTestCaseId(testCaseId: number){
      this.comments = await getTestCaseCommentsByTestCaseId({testCaseId: testCaseId})
    }
  }
})
