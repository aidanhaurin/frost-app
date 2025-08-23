import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react';

type Props = {
    lat: number,
    lon: number
}

const ViewSet = ({lat, lon}: Props) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo([lat, lon], 16, {duration: 2});
    });

    return null;
}

const MapViewer = ({lat, lon}: Props) => {
    return <div className='leaflet-container'>
        <MapContainer center={[lat, lon]} zoom={20}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[lat, lon]}>
                <Popup>You location is at: ({lat.toFixed(4)}, {lon.toFixed(4)})</Popup>
            </Marker>
            <ViewSet lat={lat} lon={lon}></ViewSet>
        </MapContainer>
    </div>
};

export default MapViewer;