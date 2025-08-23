import type Suggestion from "../../interfaces/InterfaceSuggestion";
import type InterfaceData from "../../interfaces/InterfaceData";
import { openMeteosForecast } from "../../services/openMeteosForecast";

type Props = {
    cities: Suggestion[];
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const PastSearches = ({cities, setWeatherData, setIsLoading}: Props) => {
    return <div>
        <ul>
            {cities.map((city, i) => (
                <li className="past-entry" key={i}>
                    <p onClick={async() => {
                        try{
                            setIsLoading(true);
                            const data = await openMeteosForecast(city.latitude, city.longitude, city.name, city.country, city.admin1);
                            if(data){
                                setWeatherData(data);
                                setTimeout(async() => {setIsLoading(false)}, 1000);
                            }
                        } catch(err) {
                            console.error("Request error: ", err);
                            alert("Could not fetch weather data.");
                        }//try-catch
                    }}>{city.name + ", " + (city.admin1 ? city.admin1 + ", " : "") + city.country}</p>
                </li>
            ))}
        </ul>
    </div>
};

export default PastSearches;