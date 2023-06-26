import './ContainerScopes.css'
import { useScopeStore } from '../../services/zustand/scopeStore'
import SectionScope from '../SectionScope/SectionScope'

export default function ContainerScopes () {
  const scopesFrontend = useScopeStore((state) => state.scopesFrontend)
  const scopesBackend = useScopeStore((state) => state.scopesBackend)
  const addScopeFrontend = useScopeStore((state) => state.addScopeFrontend)
  const addScopeBackend = useScopeStore((state) => state.addScopeBackend)
  const filterScopesFrontend = useScopeStore((state) => state.filterScopesFrontend)
  const filterScopesBackend = useScopeStore((state) => state.filterScopesBackend)

  return (
    <div className='containerScopes'>
      <div className='head'>
        <p>Alcance (scope)</p>
      </div>
      <div className='content'>
        <SectionScope
          textHead='Frontend'
          scopes={scopesFrontend}
          addScope={addScopeFrontend}
          filterScope={filterScopesFrontend}
        />
        <SectionScope
          textHead='Backend'
          scopes={scopesBackend}
          addScope={addScopeBackend}
          filterScope={filterScopesBackend}
        />
      </div>
    </div>
  )
}
