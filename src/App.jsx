import './App.css'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import { useCommitStore } from './services/zustand/store'

function App () {
  const selectedType = useCommitStore((state) => state.selectedType)
  return (
    <section>
      <h1>CommitMaker</h1>
      <h2>{selectedType}</h2>
      <ContainerTypes />
    </section>
  )
}

export default App
