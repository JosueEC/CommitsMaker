import './ContainerEmojis.css'
// import { emojis } from '../../services/mockups/emojis'
import { useEmojiStore } from '../../services/zustand/emojiStore'
import OptionEmoji from '../OptionEmoji/OptionEmoji'

export default function ContainerEmojis () {
  const emojis = useEmojiStore((state) => state.emojis)
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
