import { useState } from 'react'
import { shows } from '../data'


const WriteSitcomStart = ({id, show}) => {
    const handleClick = () => {
      console.log(id)
    }
    return (
    <section className='sitcom-container'>
      <div className='sitcom-header'>
          {shows.map((shows) => {
            const { id, show } = shows
            return <button 
              type='button' 
              className='btn hero-btn' 
              show={show}
              key={id} onClick={handleClick}>
                {show}
            </button>
            
          })}
      </div>
    </section>
  )
}

export default WriteSitcomStart