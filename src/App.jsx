import './App.css'
import { useEmojiStore } from './services/zustand/emojiStore'
import { useCommitStore } from './services/zustand/store'
import { tooltipEmoji } from './utils/infoTooltips'
import SectionHead from './components/SectionHead/SectionHead'
import ViewerCommit from './components/ViewerCommit/ViewerCommit'
import ContainerTypes from './components/ContainerTypes/ContainerTypes'
import ContainerScopes from './components/ContainerScopes/ContainerScopes'
import ContainerEmojis from './components/ContainerEmojis/ContainerEmojis'

function App () {
  const getAllEmojis = useEmojiStore((state) => state.getAllEmojis)
  const selectType = useCommitStore((state) => state.selectType)
  const selectEmoji = useCommitStore((state) => state.selectEmoji)
  const filterEmojisByName = useEmojiStore((state) => state.filterEmojisByName)

  function handleClickGetEmojis () {
    getAllEmojis()
    selectType('')
    selectEmoji('')
  }

  function handleChange (event) {
    const text = event.target.value
    filterEmojisByName(text)
  }

  return (
    <section>
      <h1 className='title'>CommitMaker</h1>
      <ViewerCommit />
      <div className='containerMain'>
        <ContainerScopes />
        <ContainerTypes />
      </div>
      <div className='containerGetEmojis'>
        <input
          type='search'
          placeholder='eliminar, añadir, corregir, css, dependencia, etc'
          onChange={handleChange}
        />
        <button
          className='buttonViewer'
          onClick={handleClickGetEmojis}
        >Mostrar todos los ejemplos
        </button>
        <SectionHead
          textHead=''
          tooltipID='infoEmoji'
          tooltipContent={tooltipEmoji}
        />
      </div>
      <ContainerEmojis />
    </section>
  )
}

export default App
