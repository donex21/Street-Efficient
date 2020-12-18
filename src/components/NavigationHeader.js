import React, {useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import { signOut }  from '.././store/actions/authActions'




function NavigationHeader(props) {
  const history = useHistory();
  const [open, setopen] = useState(false)

  const { auth } = props
  let emailAdd = auth.email
  let username = emailAdd.split("@")
  
  const logout = () => {
    props.signOut()
    history.push('/')
  } 
  
  return (
    <nav className = "navBarItems">
        <div className = "headerLogo">
            <img src="/image/navlogo.png" alt= "logo" height = "50px" width = "300px"/>
        </div>
        <div className = "headerMenu">
            <ul className = "headerMenuUl">
                <li><NavLink className = "headerLink"  activeStyle={{ color: 'black' }} to= "/home"> Home </NavLink></li>
                <li><NavLink className = "headerLink" activeStyle={{ color: 'black' }} to= "/couriers"> Couriers </NavLink></li>
                <li><NavLink className = "headerLink" activeStyle={{ color: 'black' }} to= "/items"> Items </NavLink></li>
                <li><NavLink className = "headerLink" activeStyle={{ color: 'black' }} to= "/map"> Map </NavLink></li>        
                <li>
                    <button className = "navUser" onClick={() => setopen(!open)} > Hi! {username[0]}</button> 

                    {open && (
                    <div className="dropdown-content">
                        <button className = "dropdown-content-btn" onClick={() => history.push('/profile')}>Profile</button> 
                        <button className = "dropdown-content-btn" onClick={()  => history.push('/user')}>User</button> 
                        <button className = "dropdown-content-btn" onClick = {logout}>Log Out</button> 
                    </div>)
                    }
                </li>
            </ul>
        </div>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  console.log(state)
  return{
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavigationHeader)

