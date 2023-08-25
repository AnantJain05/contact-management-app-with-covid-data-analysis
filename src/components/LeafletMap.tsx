import React from 'react';
import icon from './marker_map_icon.png'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import axios from 'axios'
import { useQuery } from 'react-query'

function LeafletMap() {
    const { isLoading, data} = useQuery('country-data', () => {
        return axios.get("https://disease.sh/v3/covid-19/countries")
    })

    if (isLoading){
        return <h2>Loading...</h2>
    }

    var customIcon = new Icon({
        iconUrl: require("./marker_map_icon.png"),
        iconSize: [38, 38]
    })
    return (
        <>
            <div>
            <MapContainer center={[51.505, -0.09]} zoom={1.5} scrollWheelZoom={false} style={{
                            height:"700px"
                        }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data?.data.map((d:any) => {
                    return(
                        <Marker position={[d.countryInfo.lat, d.countryInfo.long]} icon={customIcon}>
                            <Popup>
                            <strong>{d.country}</strong>
                            <p>Cases - {d.cases}</p>
                            <p>Deaths - {d.deaths}</p>
                            <p>Recovered - {d.recovered}</p>
                            </Popup>
                         </Marker>
                    )
                })}
                
            </MapContainer>
            </div>
        </>
    )
}

export default LeafletMap;