import React from 'react'
import '../styles/artists.css'
import Axios from 'axios'
import { Redirect, NavLink } from 'react-router-dom'
import MapArtists from './MapArtists'
import { Header, Grid, Dropdown } from 'semantic-ui-react'
import HeaderArtists from '../shared/Header'
import instagramPic from '../img/instagramPic.png'



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
        const response = await Axios('/artists')
        console.log('response', response)
        const data = response.data
        this.setState({
            artists: data
        })
    }
    async sortArtistsbyRating() {
        const ratingResponse = await Axios('/artists?ratings=sorted')
        console.log('ratingResponse', ratingResponse)
        const ratingData = ratingResponse.data
        this.setState({
            artists: ratingData
        })

    }
    async sortArtistsbyDistance() {
        const distanceResponse = await Axios('/artists?distance=sorted')
        console.log('ratingResponse', distanceResponse)
        const distanceData = distanceResponse.data
        this.setState({
            artists: distanceData
        })

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
                    <Grid>
                        <Grid.Column width={15} >
                            <div className='artist-container'>
                                <div className='column-name'>{artist.name}</div>
                                <Grid.Row className='artist-prof'>
                                    <img src={artist.img} className='artist' />
                                    <img className='portfolio-image' src={artist.portfolios[0].imgone} />
                                    <Grid.Column className='artist-traits'>
                                        <div className='column-rating'>&#x2605;Rating: {artist.ratingstwo}/5</div>
                                        <div className='column-distance'>{artist.distancetwo} miles away</div>
                                        <div className='column-price'>Minimum: ${artist.price}</div>
                                    </Grid.Column>
                                    <div className='artists-bio-section'>
                                    <img src ={instagramPic} alt='instagramPic' className='instagramPic'/>
                                    <p className='artists-bio'>{artist.bio}</p>
                                    </div>
                                    <Grid.Row className='artist-expertise-container'>
                                        <h4 className='artists-expertise-title'>Specialties:</h4>
                                        <h4 className='artists-expertise' >{artist.style}</h4>
                                        <h4 className='artists-expertise' >style 2</h4>
                                        <h4 className='artists-expertise' >style 3</h4>
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
              content: < div onClick = {() => this.sortArtistsbyDistance()}> distance</div>,
            },
            {
              key: 'rating',
              text: 'rating',
              value: 'rating',
              content: <div onClick = {() => this.sortArtistsbyRating()}> rating </div>,
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

