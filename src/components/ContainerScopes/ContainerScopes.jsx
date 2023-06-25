import './ContainerScopes.css'
import { scopesFrontend, scopesBackend } from '../../services/mockups/scopes'
import SectionScope from '../SectionScope/SectionScope'

export default function ContainerScopes () {
  return (
    <div className='containerScopes'>
      <div className='head'>
        <p>Alcance (scope)</p>
      </div>
      <div className='content'>
        <SectionScope textHead='Frontend' scopes={scopesFrontend} />
        <SectionScope textHead='Backend' scopes={scopesBackend} />
      </div>
    </div>
  )
}
