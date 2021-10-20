import React from 'react'
import Nav from './Nav'
import './ProfileScreen.scss'

const ProfileScreen = () => {
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="profileScreen__details">
                        <h2>email du user par redux</h2>
                        <div className="profileScreen__plan">
                            <h3>Plans</h3>
                            <button className='profileScreen__signOut' 
                            // onClick={() => auth.signOut}
                            >Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
