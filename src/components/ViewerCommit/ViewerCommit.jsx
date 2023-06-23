import './ViewerCommit.css'
import { useCommitStore } from '../../services/zustand/store'

export default function ViewerCommit () {
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  return (
    <header className='viewerCommit'>
      <h2>
        {
          `${selectedType}
          ${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}
          : ${selectedEmoji}`
        }
      </h2>
    </header>
  )
}
