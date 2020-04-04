import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
class MapArtists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                width: 1240,
                height: 350,
                latitude: 40.7401,
                longitude: -73.9903,
                zoom: 16,
            }
        }
    }
    render() {
        return (
            <ReactMapGL className='map'
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoiaHNhbWFuNCIsImEiOiJjazMzdzVldmMwejFmM2hwYTBiczF3Mm40In0.8n33Eeu8aZbNWTXBxvb0Tw'
                }>
                <Marker
                    longitude={-73.9903}
                    latitude={40.7401}
                >
                    <img src={require('../img/map-icon.svg')} width="25px" height="25px" alt="home local" />
                </Marker>
            </ReactMapGL>
        );
    }
}
export default MapArtists
