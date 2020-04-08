import React from 'react'
import Axios from 'axios'
import '../styles/artist.css'
import { Grid, Image } from 'semantic-ui-react'
import MapArtist from './MapArtist'
import { NavLink } from 'react-router-dom'
import Header from '../shared/Header'
import profilePic from '../img/profile.png'


let apiUrl;

const apiUrls = {
    production: "https://tattoo-backend.herokuapp.com",
    development: "http://localhost:3000"
};

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

const Api = Axios.create({
    baseURL: apiUrl,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

class Artist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: '',
            portfolios: ''
        }
    }
   componentDidMount(){
        this.fetchArtist()
    }

    async fetchArtist() {
        
      try{
        let artist = await Api.get(`/artists/${this.props.match.params.id}`)
        console.log(artist)
        let resp = artist.data
        console.log(resp)
        this.setState({ artist: resp })
      } catch (error) {
        throw(error.response)
    }
    }
    
   render(){
    const { artist } = this.state
    if (!artist) {
      return (<p>SORRY THIS PAGE DOES NOT EXIST</p>)
    }
    else {
      return (
            <div className='artist-profile'>
            <NavLink exact to='/'><Header/></NavLink>
              <Grid padded={true}>
                <NavLink to='/artists'><h4>&#8249; Back to results</h4></NavLink>
                <NavLink to='/contact_form'><h4 className='reach-out'>Reach out</h4></NavLink>
                <h1 className='artist-profile-header'>Artist Profile</h1>
                <Grid.Column width={16}padded={true} className='artist-background'><img className='artist img' src={artist.img} alt=''/></Grid.Column>
                <Grid.Row padded={true}>
                <Grid.Column className='artist-name-container' padded={true} width={6}>
                    <h4 className='artist-name'><b>Artist:</b> {artist.name}</h4>
                    <h4 className='artist-bio'><b>Bio:</b> {artist.bio}</h4>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row className='expertise-container'>
                    <h4 className='specialties'><b>Specialties:</b></h4>
                    <h4 className='artist-expertise' >{artist.style}</h4>
                    <h4 className='artist-expertise' >Traditional</h4>
                    <h4 className='artist-expertise' >Color</h4> 
                  </Grid.Row>
                    <h4 className='artist-shops'><b>Shops:</b> <u>My Shop</u></h4>
                </Grid.Column>
                </Grid.Row>
                <Grid.Column className='artist-name-container-mobile' padded={true} width={6}>
                    <h4 className='artist-name-mobile'><b>Artist:</b> {artist.name}</h4>
                    <h4 className='artist-bio-mobile'><b>Bio:</b> {artist.bio}</h4>
                    <div className='expertise-container-mobile'>
                    <h4 className='specialties-mobile'><b>Specialties:</b></h4>
                    <h4 className='artist-expertise-mobile' >{artist.style}</h4>
                    <h4 className='artist-expertise-mobile' >Traditional</h4>
                    <h4 className='artist-expertise-mobile' >BlackWork</h4> 
                    </div>
                    <h4 className='artist-shops-mobile'><b>Shops:</b> <u>My Shop</u></h4>
                    <h4 className='portfolio-title-mobile'>Portfolio:</h4>
                </Grid.Column>
                <h3 className='portfolio-title-mobile'>Portfolio:</h3>
                <Grid className='portfolio'  centered width={2}>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1475695752828-6d2b0a83cf8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1540174053853-1cc5d1fa8814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1522687533888-1078974f88ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1529201763263-dbf358bc90d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1482328177731-274399da39f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img className='portfolio-img' src="https://images.unsplash.com/photo-1570106786245-ce68ce6503f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                </Grid>
                <Grid.Column width={15}> 
                <div className='reviews'>
                <h4>&#x2605;Rating: {artist.ratingstwo}/5</h4>
                <b className='review-title'>Reviews</b>
                <img src={profilePic} alt ='' className='profilePic'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, eos voluptate illo aliquam cumque quas suscipit nemo neque tempora error modi pariatur consequatur ipsa aperiam quod, quam nisi impedit fugit!</p>
                <hr></hr>
                <img src={profilePic} alt ='' className='profilePic'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, eos voluptate illo aliquam cumque quas suscipit nemo neque tempora error modi pariatur consequatur ipsa aperiam quod, quam nisi impedit fugit!</p>
                <hr></hr>
                <img src={profilePic} alt ='' className='profilePic' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, eos voluptate illo aliquam cumque quas suscipit nemo neque tempora error modi pariatur consequatur ipsa aperiam quod, quam nisi impedit fugit!</p>
                <hr></hr>
                </div>
                </Grid.Column>
                <Grid>
                  <div className='map'><MapArtist/></div>
                  <div className='bottom-artist'>
                  <NavLink to='/artists'><h4 className='back-bottom'>&#8249; Back to results</h4></NavLink>
                  <NavLink to='/contact_form'><h4 className='reach-out-bottom'>Reach out</h4></NavLink>
                  </div>
                </Grid>
              </Grid>
              </div>
      )
    }
   }
}
export default Artist