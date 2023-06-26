import './DescriptionCommit.css'
import { useCommitStore } from '../../services/zustand/store'

export default function DescriptionCommit () {
  const editDescription = useCommitStore((state) => state.editDescription)

  function handleChangeDescription (event) {
    editDescription(event.target.value)
  }

  return (
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
  )
}
