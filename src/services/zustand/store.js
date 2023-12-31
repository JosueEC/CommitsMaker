import { create } from 'zustand'

export const useCommitStore = create((set) => ({
  selectedType: '',
  selectedAmbit: 'none',
  selectedEmoji: '',
  description: '',

  selectType: (type) => set((state) => ({ selectedType: type })),
  selectAmbit: (ambit) => set((state) => ({ selectedAmbit: ambit })),
  selectEmoji: (emoji) => set((state) => ({ selectedEmoji: emoji })),

  editDescription: (description) => set((state) => ({ description }))
}))
