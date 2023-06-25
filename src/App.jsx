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

  return (
    <section>
      <Toaster richColors position='top-center' />
      <h1>CommitMaker</h1>
      <ViewerCommit />
      <div className='containerMain'>
        <ContainerTypes />
        <ContainerScopes />
      </div>
      <div className='containerInputs'>
        <div className='boxInput'>
          <label>Descripcion corta</label>
          <input
            type='text'
            className='inputDescription'
            placeholder='Describe tu commit en una oracion'
            onChange={handleChangeDescription}
          />
        </div>
        <div className='boxInput'>
          <label>Cuerpo del commit</label>
          <input
            type='textarea'
            className='inputBody'
            placeholder='Agrega mas detalles sobre tu commit si es necesario'
            onChange={handleChangeBody}
          />
        </div>
      </div>
      <ContainerEmojis />
    </section>
  )
}

export default App
