import { useState } from 'react';
import type InterfaceData from '../../interfaces/InterfaceData';
import Skeleton from '../layout/Skeleton';
import MapViewer from '../layout/MapViewer';
import PastSearches from '../layout/PastSearches';
import HourlyForecast from '../layout/HourlyForecast';
import WeeklyForecast from '../layout/WeeklyForecast';
import CurrentWeather from '../layout/currentweather/CurrentWeather';
import type Suggestion from '../../interfaces/InterfaceSuggestion';

type Props = {
    weatherData: InterfaceData | null;
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    pastSearches: Suggestion[];
}

const Forecast = ({weatherData, setWeatherData, isLoading, setIsLoading, pastSearches}: Props) => {
    
    const [isCelsius, setIsCelsius] = useState<boolean>(false);                   // Toggle Farenheit/Celsius display

    return <>
        {/* This is where all of the forecast data goes */}
            { isLoading ? <Skeleton>
                {/* Simulate loading when there's nothing there! */}
            </Skeleton>
            : <>
            {/* The top section contains current weather and past searches */}
            <div id='main_top'>
                { weatherData ? 
                    <>
                        <div className='container' id='main_top_current'>
                            <CurrentWeather data={weatherData.current} location={weatherData.location + (weatherData.state ? ", " + weatherData.state + ", ": ", ")+ weatherData.country} isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>
                        </div>

                        <div className='container' id='container_past_searches'>
                            <h2><i className="bi bi-bookmarks-fill"></i> Past Searches</h2>
                            <PastSearches cities={pastSearches} setWeatherData={setWeatherData} setIsLoading={setIsLoading}></PastSearches>
                        </div>
                    </>
                : <>
                    {/* No search has been made yet! */}
                    <div className='container' style={{textAlign: "center", justifyContent: "center", alignContent:"center"}}>
                        <p id='main_top_current' style={{margin: "auto", width: "70%"}}>
                            <i className="bi bi-search" style={{fontSize: "48pt"}}></i><br/>
                            Please search for a location to forecast.
                        </p>
                    </div>

                    <div className='container' id='container_past_searches'>
                        <h2><i className="bi bi-bookmarks-fill"></i> Past Searches</h2>
                        <PastSearches cities={pastSearches} setWeatherData={setWeatherData} setIsLoading={setIsLoading}></PastSearches>
                    </div>
                </>}
            </div>
                
            {/* Everything else goes here */}
            { weatherData ? 
                <div>
                    <div className='container'>
                        <h2><i className="bi bi-geo-alt-fill"></i> Interactive Map</h2>
                        <MapViewer lat={weatherData.latitude} lon={weatherData.longitude}/>
                    </div>

                    <div className='container'>
                        <h2><i className="bi bi-alarm-fill"></i> Next 6 Hours</h2>
                        <HourlyForecast data={weatherData.hourly} isCelsius={isCelsius} isDay={Boolean(weatherData.current.isDay)}/>
                    </div>

                    <div className='container'>
                        <h2><i className="bi bi-calendar-week"></i> Later This Week</h2>
                        <WeeklyForecast data={weatherData.daily} isCelsius={isCelsius} isDay={Boolean(weatherData.current.isDay)}/>
                    </div>
                </div>
                : <div>
                    {/* No data? Nothing to show here, then. */}
                </div>
            }
        </>}
    </>
};//Component

export default Forecast;