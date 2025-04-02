import { defineStore } from 'pinia'
import { createCollection } from '@/features/collections-menu/'

type ModalIsOpen = boolean
type Name = string | null
type Description = string | null
type Project = string | null

type State = {
  modalIsOpen: ModalIsOpen,
  name: Name,
  description: Description,
  project: Project
}

export const useCreateCollectionStore = defineStore('collection-create', {
  state: (): State => ({
    modalIsOpen: false,
    name: null,
    description: null,
    project: null
  }),
  actions: {
    setModalIsOpen(modalIsOpen: ModalIsOpen) {
      this.modalIsOpen = modalIsOpen
    },
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
      await createCollection({
        name: this.name,
        description: this.description,
        project: this.project
      })
    }
  }
})
