import React from 'react'
import '../styles/artists.css'
import Axios from 'axios'
import { Redirect, NavLink } from 'react-router-dom'
import MapArtists from './MapArtists'
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
class Artists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: [],
            clicked: false
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
            this.state.artists.map((artist, index) => {
                return (
                    <Grid key={index}>
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
                    <div className='column-map'><MapArtists /></div>
                </Grid.Row>
            </Grid>
        )

    }
}

export default Artists;

