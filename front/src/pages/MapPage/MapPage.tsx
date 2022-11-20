import React, { useEffect, useState } from 'react'

import { Map, Marker } from "pigeon-maps"
import { API } from '../../api/API'


const MapPage = () => {

    const height = window.innerHeight - 111
    const api = new API()

    const getCars = async () => {
        const response: Response = await api.postRequest("/api/geo/get")
        const responseJSON = await response.clone().json()
        markersSet([...markers, ...responseJSON])
    }

    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(addPosition);
        }
    }

    const addPosition = async (position: any) => {
        const response: Response = await api.postRequest("/api/geo/add", {
            car_id: 1,
            lat: position['coords']['latitude'],
            lon: position['coords']['longitude']
        })

        markersSet([ ...markers, {
            "latitude": position['coords']['latitude'],
            "longitude": position['coords']['longitude']
        }])

}

const addGeo = async () => {
    getLocation()
}

useEffect(() => {
    addGeo()
}, [])

const [markers, markersSet] = useState<{"latitude": number, "longitude": number}[]>([])

return (
    <div className='map'>

        <Map height={height} defaultCenter={[45.0200, 38.5900]} defaultZoom={11}>
            {markers.map(marker => <Marker width={50} anchor={[marker['latitude'], marker['longitude']]} />)}

        </Map>
    </div>
)
}

export default MapPage