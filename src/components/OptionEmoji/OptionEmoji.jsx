/* eslint-disable react/prop-types */
import './OptionEmoji.css'
import { useCommitStore } from '../../services/zustand/store'

export default function OptionEmoji ({ icon, label, tag }) {
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  const selectEmoji = useCommitStore((state) => state.selectEmoji)
  const selectType = useCommitStore((state) => state.selectType)

  function handleSelectEmoji (event) {
    selectEmoji(icon)
    selectType(tag)
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
