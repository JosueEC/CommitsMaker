import { create } from 'zustand'

export const useCommitStore = create((set) => ({
  selectedType: '',
  selectedAmbit: '',
  selectedEmoji: '',

  selectType: (type) => set((state) => ({ selectedType: type }))
}))
