import { create } from 'zustand'
import { scopesFrontend, scopesBackend } from '../mockups/scopes'

export const useScopeStore = create((set) => ({
  scopesFrontend,
  scopesBackend,
  auxScopesFrontend: scopesFrontend,
  auxScopesBackend: scopesBackend,

  addScopeFrontend: (scope) => set((state) => ({ scopesFrontend: [...scopesFrontend, scope] })),
  addScopeBackend: (scope) => set((state) => ({ scopesBackend: [...scopesBackend, scope] })),

  removeScope: (scope) => set((state) => ({
    scopesFrontend: state.scopesFrontend.filter((element) => element !== scope),
    scopesBackend: state.scopesBackend.filter((element) => element !== scope)
  })),

  filterScopesFrontend: (scope) => set((state) => ({
    scopesFrontend: [...state.auxScopesFrontend].filter((element) => {
      return element.includes(scope)
    })
  })),

  filterScopesBackend: (scope) => set((state) => ({
    scopesBackend: [...state.auxScopesBackend].filter((element) => {
      return element.includes(scope)
    })
  }))
}))
