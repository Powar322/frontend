import { defineStore } from 'pinia'
import { getCollectionRunsByCollectionId } from '@/features/collection-item'

type CollectionRun = {
  id: number,
  collectionId: number,
  resultId: number,
  resultName: string,
  dateOfRun: string
}

type CollectionRuns = Array<CollectionRun> | []

type State = {
  collectionRuns: CollectionRuns
}

export const useCollectionRunsStore = defineStore('collection-runs', {
  state: (): State => ({
    collectionRuns: []
  }),
  actions: {
    async getCollectionRuns(collectionId: number){
      this.collectionRuns = await getCollectionRunsByCollectionId({
        collectionId: collectionId
      })
    }
  }
})
