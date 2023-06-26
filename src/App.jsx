import './App.css'
import { useEmojiStore } from './services/zustand/emojiStore'
import { useCommitStore } from './services/zustand/store'
import ViewerCommit from './components/ViewerCommit/ViewerCommit'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import ContainerScopes from './components/ContainerScopes/ContainerScopes'
import ContainerEmojis from './components/ContainerEmojis/ContainerEmojis'

function App () {
  const getAllEmojis = useEmojiStore((state) => state.getAllEmojis)
  const selectType = useCommitStore((state) => state.selectType)
  const selectEmoji = useCommitStore((state) => state.selectEmoji)

  function handleClickGetEmojis () {
    getAllEmojis()
    selectType('')
    selectEmoji('')
  }

  return (
    <section>
      <h1 className='title'>CommitMaker</h1>
      <ViewerCommit />
      <div className='containerMain'>
        <ContainerScopes />
        <ContainerTypes />
      </div>
      <button
        className='buttonViewer'
        onClick={handleClickGetEmojis}
      >Mostrar todos los ejemplos
      </button>
      <ContainerEmojis />
    </section>
  )
}

export default App
