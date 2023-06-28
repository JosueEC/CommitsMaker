import { create } from 'zustand'
import { emojis } from '../mockups/emojis'

export const useEmojiStore = create((set) => ({
  emojis,
  auxEmojis: emojis,

  filterEmojis: (type) => set((state) => ({
    emojis: [...state.auxEmojis].filter((emoji) => emoji.tags.includes(type))
  })),
  getAllEmojis: () => set((state) => ({
    emojis: [...state.auxEmojis]
  })),
  filterEmojisByName: (name) => set((state) => ({
    emojis: [...state.auxEmojis].filter((emoji) => {
      return emoji.label.toLowerCase().includes(name.toLowerCase())
    })
  }))
}))
