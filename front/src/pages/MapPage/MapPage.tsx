import React, { useEffect, useState } from 'react'

import { Map, Marker } from "pigeon-maps"
import { API } from '../../api/API'


const MapPage = () => {

    const height = window.innerHeight - 111
    const api = new API()

    const getCars = async () => {
        const response: Response = await api.postRequest("/api/geo/places")
        const responseJSON = await response.clone().json()
        console.log(responseJSON['result']);

        markersSet([...markers, ...responseJSON['result']])
    }

    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(addPosition);
        }
    }

    const addPosition = async (position: any) => {
        const response: Response = await api.postRequest("/api/geo/add", {
            car_id: 1,
            lat: position['coords']['lat'],
            lon: position['coords']['lon']
        })

        markersSet([...markers, {
            name: "",
            lat: position['coords']['lat'],
            lon: position['coords']['lon']
        }])

    }

    const addGeo = async () => {
        // getLocation()
        getCars()
    }

    useEffect(() => {
        addGeo()
    }, [])

    const [markers, markersSet] = useState<{ "name": string, "lat": number, "lon": number }[]>([
        {
            name: "",
            lat: 45.020955,
            lon: 38.964089
        }
    ])

    return (
        <div className='map'>

            <Map height={height} defaultCenter={[45.0200, 38.5900]} defaultZoom={11}>
                {markers.map((marker, index) => <Marker color='#00e213' key={index} width={50} anchor={[marker['lat'] as number, marker['lon'] as number]} />)}

            </Map>
        </div>
    )
}

export default MapPage