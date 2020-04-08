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
            divId: '',
            divIdTwo: '',
            divIdThree: '',
            divIdFour: '',
            divIdMore:''
        }
    }
    
    changeColor(id) {
        this.setState({
            selected: false,
            divId: id
        })
    }
    changeColorTwo(id) {
        this.setState({
            selected: false,
            divIdTwo: id
        })
    }
    changeColorThree(id) {
        this.setState({
            selected: false,
            divIdThree: id
        })
    }
    changeColorFour(id) {
        this.setState({
            selected: false,
            divIdFour: id
        })
    }
    changeColorMore(id) {
        this.setState({
            selected: false,
            divIdMore: id
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
        }
        ]
        let optionsTwo = [
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
            }
        ]
        let optionsThree = [
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
            }
        ]
        let optionsFour = [
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
            }
        ]
        let moreOptions =[
            {
                name: 'Cosmetic',
                id: 17
            },
            {
                name: 'Cover-ups',
                id: 18
            },
            {
                name: 'Touch-ups',
                id: 19
            },
            {
                name: 'Removal',
                id: 20
            }
        ]
        return(
        <div className='home-page'>  
            <Header/>
        <div className='home-pic'><div className='transparency'><h1>Find the Tattooist For You</h1><p>We'll help you find a tattoo artist that meets your needs.</p></div></div>
               <Grid.Column>
               <div className='column-location'>Lets Start with a Location: <LocationDropDown/></div> 
               <p className='option-question'><b>These optional questions will refine your search</b></p>  
               <div className='column-gender'>Preferred gender of tattooist: <GenderPreference/></div>   
               </Grid.Column> 
               <p className='option-refine'>Select up to four styles (optional)</p>
               <div className='optional'>  
                {options.map((option,index) => {
                    let option_style = !this.state.selected && this.state.divId === option.id? 'optionSelected': 'option'
                    return(
                        
                        <div className={option_style} onClick={() => this.changeColor(option.id)} key={index}>{option.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })}
                {optionsTwo.map((optionTwo, index) =>{
                     let optionTwo_style = !this.state.selected && this.state.divIdTwo === optionTwo.id? 'optionSelected': 'option'
                    return(
                    <div className={optionTwo_style} onClick={() => this.changeColorTwo(optionTwo.id)} key={index}>{optionTwo.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })}
                {optionsThree.map((optionThree,index) => {
                    let optionThree_style = !this.state.selected && this.state.divIdThree === optionThree.id? 'optionSelected': 'option'
                    return(
                        
                        <div className={optionThree_style} onClick={() => this.changeColorThree(optionThree.id)} key={index}>{optionThree.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })} 
                {optionsFour.map((optionFour,index) => {
                    let optionFour_style = !this.state.selected && this.state.divIdFour === optionFour.id? 'optionSelected': 'option'
                    return(
                        
                        <div className={optionFour_style} onClick={() => this.changeColorFour(optionFour.id)} key={index}>{optionFour.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })} 
               </div>
               <p className='option-refine'>Tattooist Specialties (optional)</p>
               <div className='optional'>
               {moreOptions.map((moreOption,index) => {
                    let moreOptions_style = !this.state.selected && this.state.divIdMore === moreOption.id? 'optionSelected': 'option'
                    return(
                        
                        <div className={moreOptions_style} onClick={() => this.changeColorMore(moreOption.id)} key={index}>{moreOption.name}<img className='info-pic' src={infoPic} alt='info-pic'/></div>
                    )
                })} 
               </div>
               <NavLink to='/artists'><button className='browse-button' type='submit'>Browse results<img src={magnifyPic} className='magnify' alt='magnify'/></button></NavLink>
        </div>
        )
    }
}

export default Homepage;