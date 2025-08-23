import type InterfaceData from '../../../interfaces/InterfaceData';
import type Suggestion from '../../../interfaces/InterfaceSuggestion';
import { openMeteosGeolocate } from '../../../services/openMeteosGeolocate';
import { openMeteosForecast } from '../../../services/openMeteosForecast';

type Props = {
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const GeoButton = ({setWeatherData, setIsLoading}: Props) => {
    const geoSearch = async() => {
        const place = await openMeteosGeolocate();
        if(place === null){
            console.log("Location Unavailable.");
        }else{
            weatherGetter(place);
        }//if-else
    }//func

    const weatherGetter = async(sugg: Suggestion) => {
        try{
            setIsLoading(true);
            const data = await openMeteosForecast(sugg.latitude, sugg.longitude, sugg.name, sugg.country, sugg.admin1);
            if(data){
                setWeatherData(data);
                setTimeout(async() => {setIsLoading(false)}, 1000);
            }
        } catch(err) {
            console.error("Request error: ", err);
            alert("Could not fetch weather data.");
        }//try-catch
    }//async func

    return <>
        <button type='button' id='geoButton' onClick={geoSearch}><i className="bi bi-geo-alt-fill" id='geo_icon'></i> Use My Location</button>
    </>
}//Component

export default GeoButton;