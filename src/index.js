import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import fire from './config/fire'
import App from './App'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
    })),
    reduxFirestore(fire),
    reactReduxFirebase(fire, {attachAuthIsReady: true})
    )   
    );

    store.firebaseAuthIsReady.then(() => {
        ReactDom.render(
            <Provider store = {store}>
                <BrowserRouter>
                    <App /> 
                </BrowserRouter>
            </Provider>, document.getElementById('root'));
    })
