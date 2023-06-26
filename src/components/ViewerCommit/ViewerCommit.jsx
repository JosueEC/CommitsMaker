import './ViewerCommit.css'
import { useState } from 'react'
import { useCommitStore } from '../../services/zustand/store'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function ViewerCommit () {
  const [display, setDisplay] = useState(false)
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  const description = useCommitStore((state) => state.description)
  const body = useCommitStore((state) => state.body)
  const editDescription = useCommitStore((state) => state.editDescription)
  const editBody = useCommitStore((state) => state.editBody)

  const commit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji} ${description}`
  const partialCommit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji}`

  function handleCopyCommit () {
    setDisplay(true)
  }

  function handleBlur () {
    setDisplay(false)
  }

  function handleChangeDescription (event) {
    editDescription(event.target.value)
  }

  function handleCleanInputs (event) {
    document.getElementById('inputDescription').value = ''
    document.getElementById('inputBody').value = ''
    editDescription('')
    editBody('')
  }

  return (
    <div className='viewerCommit'>
      <div className='containerCommit'>
        <h2>{partialCommit}</h2>
        <div className='boxInput'>
          <textarea
            rows='10' cols='20' wrap='soft'
            id='inputDescription'
            type='text'
            className='inputDescription'
            placeholder='Describe tu commit'
            onChange={handleChangeDescription}
          />
        </div>
      </div>
      <div className='copyComponent'>
        <CopyToClipboard
          onCopy={handleCopyCommit}
          text={commit + '\n' + body}
        >
          <button className='buttonCopy' onBlur={handleBlur}>Copiar Commit</button>
        </CopyToClipboard>
        <p style={{ visibility: (display) ? 'visible' : 'hidden' }}>Commit Copiado</p>
        <button onClick={handleCleanInputs} className='buttonCleanInputs'>Vaciar Campos</button>
      </div>
    </div>
  )
}
