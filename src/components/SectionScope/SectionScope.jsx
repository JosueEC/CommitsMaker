/* eslint-disable react/prop-types */
import './SectionScope.css'
import { useState } from 'react'
import { useCommitStore } from '../../services/zustand/store'
import OptionScope from '../OptionScope/OptionScope'

export default function SectionScope ({ textHead, scopes, addScope, filterScope }) {
  const selectAmbit = useCommitStore((state) => state.selectAmbit)
  const [newScope, setNewScope] = useState('')

  function handleChange (event) {
    const text = event.target.value
    setNewScope(text)
    filterScope(text)
  }

  function handleAddScope (event) {
    addScope(newScope)
    selectAmbit(newScope)
    setNewScope('')
  }

  function handleEnterPressed (event) {
    const pressedKey = event.key
    console.info(pressedKey)
    if (pressedKey === 'Enter') {
      handleAddScope()
    }
  }

  return (
    <div className='sectionScope'>
      <div className='head'>
        <p>{textHead}</p>
        <input
          type='search'
          placeholder='Añadir un nuevo scope'
          onChange={handleChange}
          onKeyDown={handleEnterPressed}
          value={newScope}
        />
        <button onClick={handleAddScope}>Añadir</button>
      </div>
      <div className='content'>
        {
          scopes.map((scope) => {
            return (
              <OptionScope scope={scope} key={scope} />
            )
          })
        }
      </div>
    </div>
  )
}
