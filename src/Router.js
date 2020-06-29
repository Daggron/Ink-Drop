import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Appp from './components/Login/Appp'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Appp} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}
