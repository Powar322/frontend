import { defineStore } from 'pinia'
import { createTestCaseCollection } from '@/features/collections-menu/'

type Name = string | null
type Description = string | null
type Project = string | null

type State = {
  name: Name,
  description: Description,
  project: Project
}

export const useCreateCollectionStore = defineStore('collection-create', {
  state: (): State => ({
    name: null,
    description: null,
    project: null
  }),
  actions: {
    setName(name: Name){
      this.name = name
    },
    setDescription(description: Description){
      this.description = description
    },
    setProject(project: Project){
      this.project = project
    },

    async createCollection(){
      await createTestCaseCollection({
        name: this.name,
        description: this.description,
        project: this.project
      })
    }
  }
})
