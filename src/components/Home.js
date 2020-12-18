
import React from 'react'
import fire from '../config/fire'

function Home() {
    const logout= () =>{
        fire.auth().signOut();
    }
    return (
        <div>
            <h1>Welcome nfjsdfsd</h1>

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home
