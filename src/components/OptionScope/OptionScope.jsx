/* eslint-disable react/prop-types */
import './OptionScope.css'
import { useCommitStore } from '../../services/zustand/store'

export default function OptionScope ({ scope }) {
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectAmbit = useCommitStore((state) => state.selectAmbit)

  function handleSelectScope (event) {
    selectAmbit(scope)
  }

  return (
    <p className={(selectedAmbit === scope) ? 'labelScope labelScope--selected' : 'labelScope'} onClick={handleSelectScope}>{scope}</p>
  )
}
