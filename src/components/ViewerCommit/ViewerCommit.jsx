import './ViewerCommit.css'
import { useState } from 'react'
import { useCommitStore } from '../../services/zustand/store'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import DescriptionCommit from '../DescriptionCommit/DescriptionCommit'

export default function ViewerCommit () {
  const [display, setDisplay] = useState(false)
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  const description = useCommitStore((state) => state.description)
  const editDescription = useCommitStore((state) => state.editDescription)

  const commit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji} ${description}`
  const partialCommit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji}`

  function handleCopyCommit () {
    setDisplay(true)
  }

  function handleBlur () {
    setDisplay(false)
  }

  function handleCleanInputs (event) {
    document.getElementById('inputDescription').value = ''
    document.getElementById('inputBody').value = ''
    editDescription('')
  }

  return (
    <div className='viewerCommit'>
      <div className='containerCommit'>
        <h2>{partialCommit}</h2>
        <DescriptionCommit />
      </div>
      <div className='copyComponent'>
        <CopyToClipboard
          onCopy={handleCopyCommit}
          text={commit}
        >
          <button className='buttonViewer' onBlur={handleBlur}>Copiar Commit</button>
        </CopyToClipboard>
        <p style={{ visibility: (display) ? 'visible' : 'hidden' }}>Commit Copiado</p>
        <button onClick={handleCleanInputs} className='buttonViewer distinct'>Vaciar Campos</button>
      </div>
    </div>
  )
}
