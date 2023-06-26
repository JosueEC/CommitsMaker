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

  const commit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji} ${description}`

  function handleCopyCommit () {
    setDisplay(true)
  }

  function handleBlur () {
    setDisplay(false)
  }

  return (
    <div className='viewerCommit'>
      <div className='containerCommit'>
        <h2 id='commit'>
          {commit}
          <br />
          <br />
          {body}
        </h2>
      </div>
      <div className='copyComponent'>
        <CopyToClipboard
          onCopy={handleCopyCommit}
          text={commit + '\n' + body}
        >
          <button className='buttonCopy' onBlur={handleBlur}>Copiar Commit</button>
        </CopyToClipboard>
        <p style={{ visibility: (display) ? 'visible' : 'hidden' }}>Commit Copiado</p>
      </div>
    </div>
  )
}
