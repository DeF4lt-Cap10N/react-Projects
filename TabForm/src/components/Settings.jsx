import React from 'react'

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings-theme'>
        <label className='dark'>
          <input type="radio" name='dark'/>
          Dark
        </label>
      </div>
      <div className='settings-theme'>
        <label className='light'>
          <input type="radio" name='light'/>
          Light
        </label>
      </div>
    </div>
  )
}

export default Settings
