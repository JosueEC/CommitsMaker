import './ContainerScopes.css'
import { useScopeStore } from '../../services/zustand/scopeStore'
import SectionScope from '../SectionScope/SectionScope'

export default function ContainerScopes () {
  const scopesFrontend = useScopeStore((state) => state.scopesFrontend)
  const scopesBackend = useScopeStore((state) => state.scopesBackend)
  const addScopeFrontend = useScopeStore((state) => state.addScopeFrontend)
  const addScopeBackend = useScopeStore((state) => state.addScopeBackend)

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
        />
        <SectionScope
          textHead='Backend'
          scopes={scopesBackend}
          addScope={addScopeBackend}
        />
      </div>
    </div>
  )
}
