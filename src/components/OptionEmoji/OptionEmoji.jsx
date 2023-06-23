/* eslint-disable react/prop-types */
import './OptionEmoji.css'
import { useCommitStore } from '../../services/zustand/store'

export default function OptionEmoji ({ icon, label }) {
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  const selectEmoji = useCommitStore((state) => state.selectEmoji)

  function handleSelectEmoji (event) {
    selectEmoji(icon)
  }

  return (
    <div
      className={(icon === selectedEmoji) ? 'optionEmoji optionEmoji--selected' : 'optionEmoji'}
      onClick={handleSelectEmoji}
    >
      <p className='icon'>{icon}</p>
      <p className='labelDefinition'>{label}</p>
    </div>
  )
}
