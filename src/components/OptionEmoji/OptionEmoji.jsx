/* eslint-disable react/prop-types */
import './OptionEmoji.css'

export default function OptionEmoji ({ icon, label }) {
  return (
    <div className='optionEmoji'>
      <p className='icon'>{icon}</p>
      <p className='labelDefinition'>{label}</p>
    </div>
  )
}
