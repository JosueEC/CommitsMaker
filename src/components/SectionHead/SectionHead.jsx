/* eslint-disable react/prop-types */
import './SectionHead.css'
import { Tooltip } from 'react-tooltip'

export default function SectionHead ({ textHead, tooltipID, tooltipContent }) {
  return (
    <div className='head'>
      <p>{textHead}
        <span
          className='material-symbols-outlined'
          data-tooltip-id={tooltipID}
          data-tooltip-content={tooltipContent}
        >
          help
        </span>
      </p>
      <Tooltip
        id={tooltipID}
        place='right'
        type='info'
        effect='solid'
      />
    </div>
  )
}
