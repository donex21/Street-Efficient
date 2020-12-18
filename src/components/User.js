import React, {useState} from 'react'
import AddStaffModal from './AddStaffModal';

function User() {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    
    return (
        <>    
            { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
            <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
            <AddStaffModal show={show} close={closeModalHandler} />
            <div>
                <h1>user</h1>
                <h1>user</h1>
                <h1>user</h1>
                <h1>user</h1>
            </div>
              
        </>
    )
}

export default User
