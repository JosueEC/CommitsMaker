/* eslint-disable react/prop-types */
import './OptionScope.css'
import { useCommitStore } from '../../services/zustand/store'
import { useScopeStore } from '../../services/zustand/scopeStore'

export default function OptionScope ({ scope }) {
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectAmbit = useCommitStore((state) => state.selectAmbit)
  const removeScope = useScopeStore((state) => state.removeScope)

  function handleSelectScope (event) {
    selectAmbit(scope)
  }

  function handleRemoveScope (event) {
    removeScope(scope)
  }

  return (
    <p className={(selectedAmbit === scope) ? 'labelScope labelScope--selected' : 'labelScope'} onClick={handleSelectScope}>{scope}<span className='buttonCloseScope' onClick={handleRemoveScope}>x</span></p>
  )
}
