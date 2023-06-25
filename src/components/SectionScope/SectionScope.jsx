/* eslint-disable react/prop-types */
import './SectionScope.css'
import OptionScope from '../OptionScope/OptionScope'

export default function SectionScope ({ textHead, scopes }) {
  return (
    <div className='sectionScope'>
      <div className='head'>
        <p>{textHead}</p>
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
