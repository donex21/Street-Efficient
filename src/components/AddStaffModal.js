import React, {useState} from 'react';
import '../styles/AddStaffModal.scss'

function AddStaffModal({ show, close }) {
    const [userSignup, setUserSignup] = useState({
        email: '',
        password:'',
        firstname:'',
        lastname: '',
        age:'',
        gender:'',
        address:'',
        position:''
    });

    const handleOnChange = (e) =>{
        setUserSignup({...userSignup, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefult();
       
    }

    let agenumber =[];
    for(let i =18; i <= 70; i++){
        agenumber.push(i)
    }
    const age = agenumber.map((x) => {return(<option key={x} value = {x}>{x}</option>)});

    return (
        <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <h2>Add New Staff</h2>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <form className = "addStaffForm" onSubmit = {handleSubmit}>
              <div className = "modalstaff-email-container">
                <div className = "modalstaff-inputfield">
                    <label>Email</label>
                    <input type="text"
                     placeholder="Enter Email" 
                     name="email"
                     required
                     value = {userSignup.email}
                     onChange = {handleOnChange} />
                </div>
                <div className = "modalstaff-inputfield">
                    <label>Password</label>
                    <input type="password"
                     placeholder="Enter Password" 
                     name="password" 
                     required
                     value = {userSignup.password}
                     onChange = {handleOnChange} />
                </div>
                <div className = "modalstaff-inputfield">
                    <label>First Name</label>
                    <input type="text" 
                    placeholder="Enter First Name" 
                    name="firstname" 
                    required 
                    value = {userSignup.firstname}
                    onChange = {handleOnChange}/>
                </div>
                <div className = "modalstaff-inputfield">
                    <label>Lastname</label>
                    <input type="text" 
                    placeholder="Enter Lastname"
                    name="lastname" 
                    required
                    value = {userSignup.lastname}
                    onChange = {handleOnChange} />
                </div>
                <div className = "modalstaff-inputfield">
                    <label>Address</label>
                    <input type="text" 
                    placeholder="Enter Address" 
                    name="address" 
                    required
                    value = {userSignup.address}
                    onChange = {handleOnChange}/>
                </div>
              </div>

              <div className = "modalstaff-age-conatiner">
                <div className = "modalstaff-inputfield">
                    <label>Age</label>  
                    <select name="age" value = {userSignup.age} onChange = {handleOnChange}>
                        {age}
                    </select>
                </div>
                <div className = "modalstaff-inputfield">
                    <label>Gender</label>  
                    <select name="gender" value = {userSignup.gender} onChange = {handleOnChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className = "modalstaff-inputfield">
                    <label>Position</label>
                    <select name="position" value = {userSignup.position} onChange = {handleOnChange}>
                        <option value="StaffClerk">Staff Clerk</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
              </div>
              <div className = "modalstaff-submit">
                    <button className = "modalstaff-submit" type="submit">Add New Staff</button>
              </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default AddStaffModal
