import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import '../styles/endPage.css'

const Endpage = () =>{
    return(
        <div className='endPage'>
        <Grid width={10} padded='vertically' className='end-pic'/>
        <h2>THANK YOU!</h2>
        <p>Your tattooist will reach out to you soon.</p>
        <NavLink exact path to='/' className='findButton'>Find another tattoo artist</NavLink>
        </div>
    )
}

export default Endpage