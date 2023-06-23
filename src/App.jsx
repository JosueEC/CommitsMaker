import './App.css'
import ViewerCommit from './components/ViewerCommit/ViewerCommit'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import ContainerScopes from './components/ContainerScopes/ContainerScopes'
import ContainerEmojis from './components/ContainerEmojis/ContainerEmojis'

function App () {
  return (
    <section>
      <h1>CommitMaker</h1>
      <ViewerCommit />
      <div className='containerMain'>
        <ContainerTypes />
        <ContainerScopes />
      </div>
      <ContainerEmojis />
    </section>
  )
}

export default App
