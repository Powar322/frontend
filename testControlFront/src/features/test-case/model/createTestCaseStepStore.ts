import { defineStore } from 'pinia'
import { createTestCaseStep } from '../api'

type TestCaseId = number | null
type NumberOfStep = number | null
type Step = string | null


type State = {
  testCaseId: TestCaseId
  numberOfStep: NumberOfStep
  step: Step
}

export const useCreateTestCaseStepStore = defineStore('test-case-step-create', {
  state: (): State => ({
    testCaseId: null,
    numberOfStep: null,
    step: null
  }),
  actions:{
    setTestCaseId(testCaseId: TestCaseId){
      this.testCaseId = testCaseId
    },
    setNumberOfStep(numberOfStep: NumberOfStep){
      this.numberOfStep = numberOfStep
    },
    setStep(step: Step){
      this.step = step
    },
    async sendRequest(){
      await createTestCaseStep({
        FKTestCaseId: this.testCaseId,
        numberOfStep: this.numberOfStep,
        step: this.step,
      })
    }
  }
})
