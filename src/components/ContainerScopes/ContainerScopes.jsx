import './ContainerScopes.css'
import { scopesFrontend, scopesBackend } from '../../services/mockups/scopes'
import OptionScope from '../OptionScope/OptionScope'

export default function ContainerScopes () {
  return (
    <div className='containerScopes'>
      <div className='head'>
        <p>Alcance (scope)</p>
      </div>
      <div className='content'>
        <div className='boxScopes'>
          <div className='head'>
            <p>Frontend</p>
          </div>
          <div className='content'>
            {
              scopesFrontend.map((scope) => {
                return (
                  <OptionScope scope={scope} key={scope} />
                )
              })
            }
          </div>
        </div>
        <div className='boxScopes'>
          <div className='head'>
            <p>Backend</p>
          </div>
          <div className='content'>
            {
              scopesBackend.map((scope) => {
                return (
                  <OptionScope scope={scope} key={scope} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
