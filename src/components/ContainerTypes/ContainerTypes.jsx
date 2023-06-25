import './ContainerTypes.css'
import { types } from '../../services/mockups/types'
import OptionType from '../OptionType/OptionType'

export default function ContainerTypes () {
  return (
    <div className='containerTypes'>
      <div className='head'>
        <p>Tipo de Commit</p>
      </div>
      <div className='content'>
        {
          types.map(({ type, label }) => {
            return (
              <OptionType
                key={type}
                type={type}
                label={label}
              />
            )
          })
        }

      </div>
    </div>
  )
}
