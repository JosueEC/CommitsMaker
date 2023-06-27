import './ContainerScopes.css'
import { useScopeStore } from '../../services/zustand/scopeStore'
import { Tooltip } from 'react-tooltip'
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
        <p>Alcance (scope)
          <span
            className='material-symbols-outlined'
            data-tooltip-id='infoScope'
            data-tooltip-content='Hello World!'
          >
            help
          </span>
        </p>
        <Tooltip
          id='infoScope'
          place='right'
          type='info'
          effect='solid'
        />
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
