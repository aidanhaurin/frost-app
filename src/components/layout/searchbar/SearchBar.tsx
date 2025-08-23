import React, {useRef, useState, useEffect} from 'react'
import type InterfaceData from '../../../interfaces/InterfaceData';
import type Suggestion from '../../../interfaces/InterfaceSuggestion';
import { openMeteosForecast } from '../../../services/openMeteosForecast';

type Props = {
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ setWeatherData, setIsLoading }: Props) => {
    // React hooks for suggestions list
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [suggesting, setSuggesting] = useState(false);

    useEffect(() => {
        const openMeteosGeoSuggest = async()=> {
            // The search bar is blank/full of spaces
            if(query.trim().length > 0){
                // URL, response, JSON from Open-meteo's geocoding API
                const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10`;
                const geoRes = await fetch(geoURL);
                const geoData = await geoRes.json();

                // Set suggestion results
                setSuggestions(geoData.results || []);
            }else{
                setSuggestions([]);
            }//if-else
        };//func

        // Make debounce to limit API calls, clear existing calls
        const debounce = setTimeout(openMeteosGeoSuggest, 300);
        return () => clearTimeout(debounce);
    }, [query]);//useEffect

    // When the text in the input field changes we activate the suggestion list
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setSuggesting(true);
    };//func

    // Fill in the search bar with the chosen result and close the suggestions
    const fillSuggest = (city: Suggestion) => {
        setQuery(city.name + ", " + (city.admin1 ? `${city.admin1}, ` : '') + city.country);

        // Update state with first result here
        weatherGetter(city);
    };//func

    const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            if(suggestions.length > 0){
                // Update state with first result here
                weatherGetter(suggestions[0]);
            }//if length
        }//if key
    }//func

    const weatherGetter = async(sugg: Suggestion) => {
        try{
            // Hide the suggestions
            setSuggesting(false);

            // Hide current info
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

    return <div className='container-searchandsuggestions'>
        <div className='search-bar' id='search-weather'>
            <input 
                ref={inputRef} 
                type="text"
                placeholder='Enter a location!'
                value={query}
                onChange={inputChange}
                onKeyDown={inputEnter}
                onFocus={() => {setSuggesting(true);}}
                onBlur={() => {setSuggesting(false);}}
            />
            <i id='search_icon' className='bi bi-search' onClick={() => {
                if(suggestions.length > 0){
                    // Update state with first result here
                    weatherGetter(suggestions[0]);
                }//if length
            }}></i>
        </div>
        <div className='container-suggestions'>
                {/*Suggestions list*/}
                {suggesting && suggestions.length > 0 && (
                    <ul className='suggestion-list'>
                        {/* Add every suggestion to list*/}
                        {suggestions.map((sugg, idx) => (
                            <li className="suggestion-entry" key={idx} onMouseDown={() =>{
                                //update state
                                fillSuggest(sugg);
                            }}>
                                {sugg.name}, {sugg.admin1 ? `${sugg.admin1}, ` : ''}{sugg.country}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    </div>
};//const

export default SearchBar;