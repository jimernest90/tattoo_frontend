import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Grid, Form } from 'semantic-ui-react'
import LocationDropDown from '../shared/LocationDropDown'
import GenderPreference from '../shared/GenderPreference'
import Header from '../shared/Header'
import infoPic from '../img/info-icon.png'
import '../styles/homePage.css'
import magnifyPic from '../img/magnify.png'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: true,
            divId: '',
            name:'',
            style: '',
            reset: false
        }
    }

    changeColor(id, name, style) {
        if (!this.state.divId && !this.state.name && !this.state.style) {
            this.setState({
                selected: false,
                divId: id,
            })
        } else if(this.state.divId && !this.state.name && !this.state.style) {
            this.setState({
                name: name
            })
        } else if(this.state.divId && this.state.name && !this.state.style) {
            this.setState({
                style: style
            })
        } else {
            this.setState({
                selected: false,
                reset: true,
                divId: '',
                name: '',
                style: ''
            })
        }
    }
    changeColorMore(id) {
        this.setState({
            selected: false,
            divIdMore: id
        })
    }
    render() {
        let options = [{
            name: 'Traditional',
            id: 1,
            style: 1
        },
        {
            name: 'Water Color',
            id: 2,
            style: 'water color'
        },
        {
            name: 'Black & White',
            id: 3,
            style: 'black and white'
        },
        {
            name: 'Color',
            id: 4,
            style: 'color'
        },
        {
            name: 'Typographic',
            id: 5,
            style: 'typographic'
        },
        {
            name: 'Abstract',
            id: 6,
            style: 'abstract'
        },
        {
            name: 'Portraits',
            id: 7,
            style: 'portraits'
        },
        {
            name: 'Animals',
            id: 8,
            style: 'animals'
        },
        {
            name: 'Dark-Skinned',
            id: 9
            ,
            style: 'dark skinned'
        },
        {
            name: 'Stick & Poke',
            id: 10,
            style: 'stick and poke'
        },
        {
            name: 'Realistic',
            id: 11,
            style: 'realistic'
        },
        {
            name: 'Tribal',
            id: 12,
            style: 'tribal'
        },
        {
            name: 'Blackwork',
            id: 13,
            style: 'blackwork'
        },
        {
            name: 'Illustrative',
            id: 14,
            style: 'illustrative'
        },
        {
            name: 'Japanese',
            id: 15,
            style: 'japanese'
        },
        {
            name: 'Cartoon',
            id: 16,
            style: 'cartoon'
        }
        ]
        let moreOptions = [
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
        return (
            <div className='home-page'>
                <Header />
                <div className='home-pic'><div className='transparency'><h1>Find the Tattooist For You</h1><p>We'll help you find a tattoo artist that meets your needs.</p></div></div>
                <Grid.Column>
                    <div className='column-location'>Lets Start with a Location: <LocationDropDown /></div>
                    <p className='option-question'><b>These optional questions will refine your search</b></p>
                    <div className='column-gender'>Preferred gender of tattooist: <GenderPreference /></div>
                </Grid.Column>
                <p className='option-refine'>Select up to four styles (optional)</p>
                <div className='optional'>
                    {options.map((option, index) => {
                        let option_style = !this.state.selected && this.state.divId === option.id || this.state.name === option.name || this.state.style === option.style ? 'optionSelected' : 'option'
                        return (

                            <div className={option_style} onClick={() => this.changeColor(option.id, option.name, option.style)} key={index}>{option.name}<img className='info-pic' src={infoPic} alt='info-pic' /></div>
                        )
                    })}
                </div>
                <p className='option-refine'>Tattooist Specialties (optional)</p>
                <div className='optional'>
                    {moreOptions.map((moreOption, index) => {
                        let moreOptions_style = !this.state.selected && this.state.divIdMore === moreOption.id ? 'optionSelected' : 'option'
                        return (

                            <div className={moreOptions_style} onClick={() => this.changeColorMore(moreOption.id)} key={index}>{moreOption.name}<img className='info-pic' src={infoPic} alt='info-pic' /></div>
                        )
                    })}
                </div>
                <NavLink to='/artists'><button className='browse-button' type='submit'>Browse results<img src={magnifyPic} className='magnify' alt='magnify' /></button></NavLink>
            </div>
        )
    }
}

export default Homepage;