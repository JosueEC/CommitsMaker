import './ContainerTypes.css'
import { types } from '../../services/mockups/types'
import { tooltipType } from '../../utils/infoTooltips'
import SectionHead from '../SectionHead/SectionHead'
import OptionType from '../OptionType/OptionType'

export default function ContainerTypes () {
  return (
    <div className='containerTypes'>
      <SectionHead
        textHead='Tipo de Commit'
        tooltipID='infoType'
        tooltipContent={tooltipType}
      />
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
