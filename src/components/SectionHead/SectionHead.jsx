/* eslint-disable react/prop-types */
import './SectionHead.css'
import { Tooltip } from 'react-tooltip'

export default function SectionHead ({ textHead, tooltipID, tooltipContent }) {
  return (
    <div className='head'>
      <p>{textHead}
      </p>
      <span
        className='material-symbols-outlined'
        data-tooltip-id={tooltipID}
        data-tooltip-content={tooltipContent}
        data-tooltip-variant='light'
        data-tooltip-place='right'
      >
        help
      </span>
      <Tooltip id={tooltipID} />
    </div>
  )
}
