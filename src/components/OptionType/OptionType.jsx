/* eslint-disable react/prop-types */
import './OptionType.css'
import { useCommitStore } from '../../services/zustand/store'

export default function OptionType ({ type, label }) {
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectType = useCommitStore((state) => state.selectType)

  function handleSelectOption (event) {
    selectType(type)
  }

  return (
    <div className={(selectedType === type) ? 'optionType optionType--selected' : 'optionType'} onClick={handleSelectOption}>
      <p className='labelType'>{type}</p>
      <p className='labelDescription'>{label}</p>
    </div>
  )
}
