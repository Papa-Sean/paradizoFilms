import React from 'react'
import { useGlobalContext } from '../context'
import { plots } from '../data'
import { FaTimes } from 'react-icons/fa'

const WriteSitcom = () => {
  const { showSelected, closeWriteShow } = useGlobalContext()
  return (
    <div className={showSelected ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>Fill in show plots below:</h3>
        {plots.map((plotLine) => {
          const { id, plot } = plotLine
          return (
            <div>
              <h3 key={id}>Plot #{id}: {plot}</h3>
              <textarea type='text' rows="4" wrap='soft'></textarea>
            </div>
          )
        })}
        <button className='close-modal-btn' onClick={closeWriteShow}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default WriteSitcom