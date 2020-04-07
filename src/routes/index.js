import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Artist from '../screens/Artist'
import Artists from '../screens/Artists'
import ContactForm from '../screens/ContactForm'
import Homepage from '../screens/Homepage'
import Endpage from '../screens/EndPage'

const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/thankyou' component={Endpage}/>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/artists' component={Artists}/>
            <Route exact 
            path='/artists/:id' 
            render={props => <Artist {...props}/>}
            />
            <Route exact path='/contact_form' component={ContactForm}/>
        </Switch>
    )
}

export default Routes;