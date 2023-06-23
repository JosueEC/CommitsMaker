import './ContainerScopes.css'
import { scopesFrontend, scopesBackend } from '../../services/mockups/scopes'
import OptionScope from '../OptionScope/OptionScope'

export default function ContainerScopes () {
  return (
    <div className='containerScopes'>
      <div className='boxScopes'>
        {
          scopesFrontend.map((scope) => {
            return (
              <OptionScope scope={scope} key={scope} />
            )
          })
        }
      </div>
      <div className='boxScopes'>
        {
          scopesBackend.map((scope) => {
            return (
              <OptionScope scope={scope} key={scope} />
            )
          })
        }
      </div>
    </div>
  )
}
