import React, {useState} from 'react';
import { connect } from 'react-redux'
import { signIn }  from '.././store/actions/authActions'
import { Redirect } from 'react-router-dom'

function Login(props) {
    const [emailPwd, setEmailPwd] = useState({
        email: '', 
        password: ''
    });

    const handleOnChange = (e) =>{
        setEmailPwd({...emailPwd, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        props.signIn(emailPwd)   
    }

    const {authError, auth} = props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
        <div className = "login-main">
             <div className = "login-section">
                <img src="/image/streeteffecientlogo.png" alt= "logo" height = "100px" width = "500px"/>
                <form className = "loginForm" method="post" onSubmit = {handleSubmit}>
                    <input type="text" 
                        placeholder="Email" 
                        required
                        name="email"
                        value = {emailPwd.email}
                        onChange = {handleOnChange}
                    />      
    
                    <input type="password" 
                        placeholder="Password" 
                        required
                        name="password" 
                        value = {emailPwd.password}
                        onChange = {handleOnChange}
                    />     
                    <div className = "Errormessage">
                       { authError ? <span> {authError} </span> : null }
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
             </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
