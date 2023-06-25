import { create } from 'zustand'
import { scopesFrontend, scopesBackend } from '../mockups/scopes'

export const useScopeStore = create((set) => ({
  scopesFrontend,
  scopesBackend,

  addScopeFrontend: (scope) => set((state) => ({ scopesFrontend: [...scopesFrontend, scope] })),
  addScopeBackend: (scope) => set((state) => ({ scopesBackend: [...scopesBackend, scope] })),

  removeScope: (scope) => set((state) => ({
    scopesFrontend: state.scopesFrontend.filter((element) => element !== scope),
    scopesBackend: state.scopesBackend.filter((element) => element !== scope)
  }))
}))
