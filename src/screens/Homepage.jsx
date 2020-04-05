import React from 'react'
import {NavLink} from 'react-router-dom'
import {Dropdown, Grid, Form} from 'semantic-ui-react'
import LocationDropDown from '../shared/LocationDropDown'
import GenderPreference from '../shared/GenderPreference'
import Header from '../shared/Header'
import infoPic from '../img/info-icon.png'
import '../styles/homePage.css'
import magnifyPic from'../img/magnify.png'

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            selected: true,
            divId: ''
        }
    }
    
    changeColor(id) {
        this.setState({
            selected: false,
            divId: id
        })
    }
    
    render(){
        let options = [{
            name: 'Traditional',
            id: 1
        },
        {
            name: 'Water Color',
            id: 2
        },
        {
            name: 'Black & White',
            id: 3
        },
        {
            name: 'Color',
            id: 4
        },
        {
            name: 'Typographic',
            id: 5
        },
        {
            name: 'Abstract',
            id: 6
        },
        {
            name: 'Portraits',
            id: 7
        },
        {
            name: 'Animals',
            id: 8
        },
        {
            name: 'Dark-Skinned',
            id: 9
        },
        {
            name: 'Stick & Poke',
            id: 10
        },
        {
            name: 'Realistic',
            id: 11
        },
        {
            name: 'Tribal',
            id: 12
        },
        {
            name: 'Blackwork',
            id: 13
        },
        {
            name: 'Illustrative',
            id: 14
        },
        {
            name: 'Japanese',
            id: 15
        },
        {
            name: 'Cartoon',
            id: 16
        },
        ]
        
        return(
        <div className='home-page'>  
            <Header/>
        <Grid width={10} padded='vertically' className='home-pic'><div className='transparency'><h1>Find the Tattooist For You</h1><p>We'll help you find a tattoo artist that meets your needs.</p></div></Grid>
               <Grid.Column>
               <div className='column-location'>Lets Start with a Location: <LocationDropDown/></div> 
               <p className='option-question'><b>These optional questions will refine your search</b></p>  
               <div className='column-gender'>Preferred gender of tattooist: <GenderPreference/></div>   
               </Grid.Column> 
               <p className='option-refine'>Select style (optional)</p>
               <div className='optional'>  
                {options.map((option) => {
                    let option_style = !this.state.selected && this.state.divId === option.id? 'optionSelected': 'option'
                    return(
                        
                        <div className={option_style} onClick={() => this.changeColor(option.id)}>{option.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })}   
               </div>
               <NavLink to='/artists'><button className='browse-button' type='submit'>Browse results<img src={magnifyPic} className='magnify' alt='magnify'/></button></NavLink>
        </div>
        )
    }
}

export default Homepage;