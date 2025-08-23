import { fetchWeatherApi } from "openmeteo";

/*
    Request all of the forecast data using Open-Meteos
    
*/
export const openMeteosForecast = async(lat: number, lon: number, location: string, country: string, state?: string) => {
    try{
        //most of this is taken from Open-Meteos' API doc site
        const params = {
                latitude: lat,
                longitude: lon,
                daily: [
                    "temperature_2m_max",
                    "temperature_2m_min",
                    "precipitation_sum",
                    "precipitation_hours",
                    "precipitation_probability_max",
                    "weather_code",
                    "wind_speed_10m_max",
                    "wind_direction_10m_dominant",
                ],
                hourly: [
                    "temperature_2m",
                    "relative_humidity_2m",
                    "apparent_temperature",
                    "precipitation_probability",
                    "precipitation",
                    "weather_code",
                ],
                current: [
                    "temperature_2m",
                    "apparent_temperature",
                    "relative_humidity_2m",
                    "precipitation",
                    "wind_speed_10m",
                    "wind_direction_10m",
                    "is_day",
                    "weather_code"
                ],
                wind_speed_unit: "mph",
                temperature_unit: "fahrenheit",
                precipitation_unit: "inch"
            };
        
        //fetch request
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        
        // Attributes for timezone and location
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const latitude = response.latitude();
        const longitude = response.longitude();

        const current = response.current()!;
        const hourly = response.hourly()!;
        const daily = response.daily()!;

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const weatherData = {
            location: location,
            state: state,
            country: country,
            latitude: latitude,
            longitude: longitude,
            current: {
                time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                temperature: current.variables(0)!.value(),
                apparentTemperature: current.variables(1)!.value(),
                relativeHumidity: current.variables(2)!.value(),
                precipitation: current.variables(3)!.value(),
                windSpeed: current.variables(4)!.value(),
                windDirection: current.variables(5)!.value(),
                isDay: current.variables(6)!.value(),
                weatherCode: current.variables(7)!.value(),
            },
            hourly: {
                time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                ),
                temperature: hourly.variables(0)!.valuesArray()!,
                weatherCode: hourly.variables(1)!.valuesArray()!,
                precipitation: hourly.variables(2)!.valuesArray()!,
                precipitationProbability: hourly.variables(3)!.valuesArray()!,
                apparentTemperature: hourly.variables(4)!.valuesArray()!,
                relativeHumidity: hourly.variables(5)!.valuesArray()!,
            },
            daily: {
                time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
                    (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
                ),
                temperatureMax: daily.variables(0)!.valuesArray()!,
                temperatureMin: daily.variables(1)!.valuesArray()!,
                precipitationSum: daily.variables(2)!.valuesArray()!,
                precipitationHours: daily.variables(3)!.valuesArray()!,
                precipitationProbabilityMax: daily.variables(4)!.valuesArray()!,
                weatherCode: daily.variables(5)!.valuesArray()!,
                windSpeedMax: daily.variables(6)!.valuesArray()!,
                windDirection: daily.variables(7)!.valuesArray()!,
            },
        };
        
        return weatherData;
    }catch(error) {
        alert("Error in fetching weather data.");
        return null;
    }//try-catch
}//function