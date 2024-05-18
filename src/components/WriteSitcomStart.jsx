import { useState } from 'react'
import { shows } from '../data'
import { useGlobalContext } from '../context'


const WriteSitcomStart = () => {
    const { handleShowSelected } = useGlobalContext()
    return (
    <section className='sitcom-container'>
      <div className='sitcom-header'>
          {shows.map((shows) => {
            const { id, show } = shows
            return <button 
              type='button' 
              className='btn hero-btn' 
              show={show}
              key={id} onClick={handleShowSelected}>
                {show}
            </button>
            
          })}
      </div>
    </section>
  )
}

export default WriteSitcomStart