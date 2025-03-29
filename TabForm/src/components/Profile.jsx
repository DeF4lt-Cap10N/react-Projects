import React from 'react'

const Profile = () => {
   return (
      <div className='profile'>
         <div className='profile-container'>
            <label className='profile-name'>
               Name :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Age :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Email :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Dob :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Education :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Profession :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
         <div className='profile-container'>
            <label className='profile-name'>
               Address :
            </label>
            <input className='inp-profile' type="text" name="name" />
         </div>
      </div>
   )
}

export default Profile
