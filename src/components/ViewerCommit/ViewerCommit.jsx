import './ViewerCommit.css'
import { useCommitStore } from '../../services/zustand/store'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'sonner'

export default function ViewerCommit () {
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  const selectedEmoji = useCommitStore((state) => state.selectedEmoji)
  const description = useCommitStore((state) => state.description)
  const body = useCommitStore((state) => state.body)

  const commit = `${selectedType}${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}: ${selectedEmoji} ${description}`

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
          onCopy={() => toast.success('Copy to cliboard')}
          text={commit + '\n' + body}
        >
          <button className='buttonCopy'>Copy Commit</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}
