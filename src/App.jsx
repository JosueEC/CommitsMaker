import './App.css'
import { useCommitStore } from './services/zustand/store'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import ContainerScopes from './components/ContainerScopes/ContainerScopes'
import { ContainerEmojis } from './components/ContainerEmojis/ContainerEmojis'

function App () {
  const selectedType = useCommitStore((state) => state.selectedType)
  const selectedAmbit = useCommitStore((state) => state.selectedAmbit)
  return (
    <section>
      <h1>CommitMaker</h1>
      <h2>
        {
          `${selectedType}
          ${(selectedAmbit !== 'none') ? '(' + selectedAmbit + ')' : ''}
          :`
        }
      </h2>
      <ContainerTypes />
      <ContainerScopes />
      <ContainerEmojis />
    </section>
  )
}

export default App
