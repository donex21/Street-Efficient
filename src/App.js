import React from 'react'
import {Switch, Route,} from 'react-router-dom'
import { connect } from 'react-redux';

/*style */
import './styles/app.scss'

/*components*/
import Home from './components/Home'
import Login from './components/Login'
import NavigationHeader from './components/NavigationHeader'
import Couriers from './components/Couriers'
import Items from './components/Items'
import RidersMap from './components/RidersMap'
import User from './components/User'
import Profile from './components/Profile'

function App(props) {
    const { auth }  = props
    const withnavhead = auth.uid && <NavigationHeader/>
    const link = auth.uid ? Home : Login
    return (
        <div className = "app-main">     
             {withnavhead}
              <Switch>    
                    <Route exact path='/' component={link} />   
                    <Route path='/home' component={Home} />
                    <Route path='/couriers' component={Couriers} />
                    <Route path='/items' component={Items} />
                    <Route path='/map' component={RidersMap} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/user' component={User} />                        
               </Switch>
            
           <div className = "footer">
               <h2>Copyright @ StreetEfficient 2020</h2>
           </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (App)
