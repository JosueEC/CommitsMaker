/* eslint-disable react/prop-types */
import './OptionType.css'
import { useCommitStore } from '../../services/zustand/store'
import { useEmojiStore } from '../../services/zustand/emojiStore'

export default function OptionType ({ type, label }) {
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectType = useCommitStore((state) => state.selectType)
  const filterEmojis = useEmojiStore((state) => state.filterEmojis)

  function handleSelectOption (event) {
    selectType(type)
    filterEmojis(type)
  }

  return (
    <div className={(selectedType === type) ? 'optionType optionType--selected' : 'optionType'} onClick={handleSelectOption}>
      <p className='labelType'>{type}</p>
      <p className='labelDescription'>{label}</p>
    </div>
  )
}
