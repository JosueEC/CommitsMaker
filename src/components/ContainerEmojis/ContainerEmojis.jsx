import './ContainerEmojis.css'
import { useEmojiStore } from '../../services/zustand/emojiStore'
import OptionEmoji from '../OptionEmoji/OptionEmoji'

export default function ContainerEmojis () {
  const emojis = useEmojiStore((state) => state.emojis)
  return (
    <div className='containerEmojis'>
      {
        emojis.map(({ icon, label, tags }) => {
          return (
            <OptionEmoji icon={icon} label={label} tag={tags[0]} key={icon} />
          )
        })
      }
    </div>
  )
}
