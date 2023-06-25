/* eslint-disable react/prop-types */
import './SectionScope.css'
import { useState } from 'react'
import OptionScope from '../OptionScope/OptionScope'

export default function SectionScope ({ textHead, scopes }) {
  const [newScope, setNewScope] = useState('')

  function handleChange (event) {
    const text = event.target.value
    setNewScope(text)
  }

  function handleAddScope (event) {
    scopes.push(newScope)
  }

  function handleEnterPressed (event) {
    const key = event.target.key
    if (key === 'Enter') {
      handleAddScope()
    }
  }

  return (
    <div className='sectionScope'>
      <div className='head'>
        <p>{textHead}</p>
        <input
          type='text'
          placeholder='Añadir un nuevo scope'
          onChange={handleChange}
          onKeyDown={handleEnterPressed}
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
