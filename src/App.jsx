import './App.css'
import { useCommitStore } from './services/zustand/store'
import ViewerCommit from './components/ViewerCommit/ViewerCommit'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import ContainerScopes from './components/ContainerScopes/ContainerScopes'
import ContainerEmojis from './components/ContainerEmojis/ContainerEmojis'
import { Toaster } from 'sonner'

function App () {
  const editDescription = useCommitStore((state) => state.editDescription)
  const editBody = useCommitStore((state) => state.editBody)

  function handleChangeDescription (event) {
    editDescription(event.target.value)
  }

  function handleChangeBody (event) {
    editBody(event.target.value)
  }

  function handleCleanInputs (event) {
    document.getElementById('inputDescription').value = ''
    document.getElementById('inputBody').value = ''
    editDescription('')
    editBody('')
  }

  return (
    <section>
      <Toaster richColors position='bottom-right' />
      <h1 className='title'>CommitMaker</h1>
      <ViewerCommit />
      <div className='containerInputs'>
        <div className='boxInput'>
          <label>Descripcion corta</label>
          <textarea
            rows='10' cols='20' wrap='soft'
            id='inputDescription'
            type='text'
            className='inputDescription'
            placeholder='Describe tu commit en una oracion'
            onChange={handleChangeDescription}
          />
        </div>
        <div className='boxInput'>
          <label>Cuerpo del commit (opcional)</label>
          <textarea
            rows='10' cols='20' wrap='soft'
            id='inputBody'
            className='inputBody'
            placeholder='Agrega mas detalles sobre tu commit si es necesario'
            onChange={handleChangeBody}
          />
        </div>
        <button onClick={handleCleanInputs} className='buttonCleanInputs'>Vaciar Campos</button>
      </div>
      <div className='containerMain'>
        <ContainerTypes />
        <ContainerScopes />
      </div>
      <ContainerEmojis />
    </section>
  )
}

export default App
