import './ContainerEmojis.css'
import { emojis } from '../../services/mockups/emojis'
import OptionEmoji from '../OptionEmoji/OptionEmoji'

export default function ContainerEmojis () {
  return (
    <div className='containerEmojis'>
      {
        emojis.map(({ icon, label }) => {
          return (
            <OptionEmoji icon={icon} label={label} key={icon} />
          )
        })
      }
    </div>
  )
}
