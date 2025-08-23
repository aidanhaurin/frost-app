import {useEffect, useState} from 'react';
import type InterfaceData from '../../interfaces/InterfaceData';
import SearchBar from '../layout/searchbar/SearchBar';
import GeoButton from '../layout/searchbar/GeoButton';
import type Suggestion from '../../interfaces/InterfaceSuggestion';
import { saveSearch } from '../../services/saveSearch';
import { setBackground } from '../../services/setBackground';
import FooterPanel from '../layout/FooterPanel';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Forecast from './Forecast';
import About from './About';

const DataRouter = () => {
    // The React hooks
    const [weatherData, setWeatherData] = useState<InterfaceData | null>(null);   // Holds current forecast data
    const [pastSearches, setPastSearches] = useState<Suggestion[]>([]);           // Save a list of past searches
    const [isLoading, setIsLoading] = useState<boolean>(false);                    // Loading animation check
    const navigate = useNavigate();

    // Extra variables
    let isStartup = true;

    // On startup
    useEffect(()=>{
        if(isStartup){
            // Load past searches and store them in state hook
            // Use Philadelphia as a default
            const storedSearches = JSON.parse(localStorage.getItem('pastSearches') || '[{ "admin1":"Pennsylvania", "country":"United States", "latitude":"40.05356979370117", "longitude":"-75.05311584472656", "name":"Philadelphia" }]');
            setPastSearches(storedSearches);
            console.log("Past searches successfully loaded.");

            // Technically the useEffect still runs twice
            // But having a flag here skips everything in the if-block so it still helps
            isStartup = false;
        }//if
    },[])//useEffect

    // Run when weatherdata changes
    useEffect(() => {
        if(weatherData !== null){
            // Store searches to memory
            setPastSearches((prevState) => {
                return saveSearch({
                    name: weatherData.location, 
                    country: weatherData.country, 
                    admin1: weatherData.state, 
                    latitude: weatherData.latitude, 
                    longitude: weatherData.longitude
                }, prevState);
            });

            // Change the background to fit weather code
            setBackground(weatherData?.current.weatherCode, Boolean(weatherData?.current.isDay));

            // Move to forecasting (main) page
            navigate("/");
        }

        console.log(weatherData);
    }, [weatherData]);

    return <>
            {/* Navbar with links */}
            <div id='navbar'>
                <div id='navbar-logo'>
                    <h3><i className="bi bi-snow"></i> F.R.O.S.T. Weather App</h3>
                </div>
                <div id='navbar-search'>
                    <SearchBar setWeatherData={setWeatherData} setIsLoading={setIsLoading}/>
                    <GeoButton setWeatherData={setWeatherData} setIsLoading={setIsLoading}/>
                </div>
                <div id='navbar-extras'>
                    <Link to="/">Search</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>

            {/* This is where the routing happens */}
            <div id='main'>
                <Routes>
                    <Route path='/' element={
                        <Forecast 
                            weatherData={weatherData}
                            setWeatherData={setWeatherData}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            pastSearches={pastSearches}    
                        ></Forecast>}>
                    </Route>
                    <Route path='/about' element={
                        <About>
                        </About>}>
                    </Route>
                </Routes>
            </div>

            {/* Footer */}
            <FooterPanel></FooterPanel>
    </>
};//Component

export default DataRouter;