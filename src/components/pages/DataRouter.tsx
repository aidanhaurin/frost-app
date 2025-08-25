import {useEffect, useState} from 'react';
import type InterfaceData from '../../interfaces/InterfaceData';
import type Suggestion from '../../interfaces/InterfaceSuggestion';
import { saveSearch } from '../../services/saveSearch';
import { setBackground } from '../../services/setBackground';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Forecast from './Forecast';
import About from './About';
import Layout from './Layout';

const DataRouter = () => {
    // The React hooks
    const [weatherData, setWeatherData] = useState<InterfaceData | null>(null);   // Holds current forecast data
    const [pastSearches, setPastSearches] = useState<Suggestion[]>([]);           // Save a list of past searches
    const [isLoading, setIsLoading] = useState<boolean>(false);                    // Loading animation check

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

            // Go to forecast page
            router.navigate("/");
        }//if
    }, [weatherData]);

    // Page Routing
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout setWeatherData={setWeatherData} setIsLoading={setIsLoading}/>,
            children: [
            {
                index: true,
                element: <Forecast 
                    weatherData={weatherData}
                    setWeatherData={setWeatherData}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    pastSearches={pastSearches} 
                />,
            },
            {
                path: 'about',
                element: <About/>,
            },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};//Component

export default DataRouter;