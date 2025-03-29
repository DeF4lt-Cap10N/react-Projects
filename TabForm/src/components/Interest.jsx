import React from 'react'

const Interest = () => {
  return (
    <div className='Interest'>
      <div className='Interest-type'>
        <label className='codeing'>
          <input type="radio" name='coding' />
          Coding
        </label>
      </div>
      <div className='Interest-type'>
        <label className='cBuilding'>
          <input type="radio" name='Building' />
          Building
        </label>
      </div>
      <div className='Interest-type'>
        <label className='Listening'>
          <input type="radio" name='Listening' />
        Listening
        </label>
      </div>
      <div className='Interest-type'>
        <label className='Fighting'>
          <input type="radio" name='Fighting' />
        Fighting
        </label>
      </div>
      <div className='Interest-type'>
        <label className='Exploring'>
          <input type="radio" name='Exploring' />
      Exploring
        </label>
      </div>
    </div>
  )
}

export default Interest
