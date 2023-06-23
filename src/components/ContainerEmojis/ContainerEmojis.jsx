import { emojis } from '../../services/mockups/emojis'

export function ContainerEmojis () {
  return (
    <div>
      {
        emojis.map(({ icon }) => {
          return (
            <p key={icon}>{icon}</p>
          )
        })
      }
    </div>
  )
}
