import React from 'react'
import '../styles/artists.css'
import Axios from 'axios'
import { Redirect, NavLink } from 'react-router-dom'
import { Header, Grid, Dropdown } from 'semantic-ui-react'
import HeaderArtists from '../shared/Header'
import instagramPic from '../img/instagramPic.png'

let image = ["https://images.unsplash.com/photo-1475695752828-6d2b0a83cf8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1540174053853-1cc5d1fa8814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1522687533888-1078974f88ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1529201763263-dbf358bc90d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1482328177731-274399da39f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1570106786245-ce68ce6503f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"]
const imageFunction = () => {
    let guesser = Math.floor(Math.random(image.length) * 10)

    if (guesser <= 0) {
        return image[0]
    } else if (guesser === 1) {
        return image[1]
    } else if (guesser === 2) {
        return image[2]
    } else if (guesser === 3) {
        return image[3]
    } else if (guesser === 4) {
        return image[4]
    } else {
        return image[5]
    }

}

let apiUrl = "https://tattoo-backend.herokuapp.com";

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
class Artists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: [],
            clicked: false,
            reset: false
        }
    }
    componentDidMount() {
        this.getArtists()
    }
    async getArtists() {
        try {
            const response = await Api.get('/artists')
            console.log('response', response)
            const data = response.data
            this.setState({
                artists: data
            })
        } catch (error) {
            throw (error.response)
        }
    }



    async sortArtistsbyRating() {
        try {
            const ratingResponse = await Api.get('/artists?ratings=sorted')
            console.log('ratingResponse', ratingResponse)
            const ratingData = ratingResponse.data
            this.setState({
                artists: ratingData,
               
            })
        } catch (error) {
            throw (error.response)
        }

    }
    async sortArtistsbyDistance() {
        try {
            const distanceResponse = await Api.get('/artists?distance=sorted')
            console.log('ratingResponse', distanceResponse)
            const distanceData = distanceResponse.data
            this.setState({
                artists: distanceData,
                
            })
        } catch (error) {
            throw (error.response)
        }

    }


    openArtist = (id) => {
        console.log('clicked')
        this.setState({
            clicked: true,
            redirectID: id
        })
    }

    renderArtists(props) {
        let artists = this.state.clicked && <Redirect to={`/artists/${this.state.redirectID}`} />
        return (
            this.state.artists.map((artist) => {
                return (
                    <Grid >
                        <Grid.Column width={15} >
                            <div className='artist-container'>
                                <div className='column-name'>{artist.name}</div>
                                <Grid.Row className='artist-prof'>
                                    <img src={artist.img} className='artist' />
                                    <img className='portfolio-image' src={imageFunction()} />
                                    <Grid.Column className='artist-traits'>
                                        <div className='column-rating'>&#x2605;Rating: {artist.ratingstwo}/5</div>
                                        <div className='column-distance'>{artist.distancetwo} miles away</div>
                                        <div className='column-price'>Minimum: ${artist.price}</div>
                                    </Grid.Column>
                                    <div className='artists-bio-section'>
                                        <img src={instagramPic} alt='instagramPic' className='instagramPic' />
                                        <p className='artists-bio'>{artist.bio}</p>
                                    </div>
                                    <Grid.Row className='artist-expertise-container'>
                                        <h4 className='artists-expertise-title'>Specialties:</h4>
                                        <h4 className='artists-expertise' >{artist.style}</h4>
                                        <h4 className='artists-expertise' >Traditonal</h4>
                                        <h4 className='artists-expertise' >Color</h4>
                                    </Grid.Row>
                                </Grid.Row>
                                <p className='learn-more' onClick={() => this.openArtist(artist.id)}><u>Learn More</u></p>
                            </div>
                            {artists}
                        </Grid.Column>
                    </Grid>
                )
            })
        )
    
    }
    render(props) {
        const options = [
            {
                key: 'distance',
                text: 'distance',
                value: 'distance',
                content: < div onClick={() => this.sortArtistsbyDistance()}> distance</div>,
            },
            {
                key: 'rating',
                text: 'rating',
                value: 'rating',
                content: <div onClick={() => this.sortArtistsbyRating()}> rating </div>,
            },
        ]
        return (
            <Grid className='artists-page' padded='horizontally'>
                <Grid.Row >
                    <div className='artists'>
                        <NavLink exact to='/'><HeaderArtists /></NavLink>
                        <div className='sorting'>
                            <h2 className='matches'>{`${this.state.artists.length} matches`}</h2>
                            <Header className='sort' as='h4'>
                                <Header.Content>
                                    sort by{' '}
                                    <Dropdown
                                        inline
                                        header=''
                                        options={options}
                                        defaultValue={options[0].value}
                                    />
                                </Header.Content>
                            </Header>
                        </div>
                        <div className='column-desktop' style={{ overflow: 'scroll', overflowX: 'hidden', maxHeight: 570 }}>{this.renderArtists()}</div>
                        <div className='column-mobile'>{this.renderArtists()}</div>
                    </div>
                    <div className='column-map' style={{paddingLeft:'2em'}}><iframe style={{border:'0', borderRadius:'5px'}}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.027020992727!2d-73.99254478484958!3d40.739430943874275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b7e53307%3A0x757eb8add2919c67!2s13-1%20E%2020th%20St%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1587672689454!5m2!1sen!2sus" width="600" height="550"></iframe></div>
                    
                </Grid.Row>
            </Grid>
        )
    }
}

export default Artists;

