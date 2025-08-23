// Get one-line description based on weather code
const getWeatherCodeString = (code: number) => {
        //https://open-meteo.com/en/docs#weather_variable_documentation
        switch(code){
            // Clear sky
            default:
            case 0: return "Clear skies";

            // Mainly clear, partly cloudy, and overcast
            case 1: return "Mainly clear";
            case 2: return "Partly Cloudy"
            case 3: return "Overcast clouds";

            // Fog and depositing rime fog
            case 45: return "Fog"
            case 48: return "Rime fog";

            // Drizzle: Light, moderate, and dense intensity
            case 51: return "Light drizzle";
            case 53: return "Moderate drizzle";
            case 55: return "Dense drizzle";

            // Freezing Drizzle: Light and dense intensity
            case 56:
            case 57: return "Freezing drizzle";

            // Rain: Slight, moderate and heavy intensity
            case 61: return "Slight rains";
            case 63: return "Moderate rains";
            case 65: return "Heavy rains";

            // Freezing Rain: Light and heavy intensity
            case 66:
            case 67: return "Freezing rains";

            // Snow fall: Slight, moderate, and heavy intensity
            case 71: return "Slight snowfall";
            case 73: return "Moderate snowfall";
            case 75: return "Heavy snowfall";

            // Snow grains
            case 77: return "Snow grains";

            // Rain showers: Slight, moderate, and violent
            case 80: return "Slight rain showers";
            case 81: return "Moderate rain showers";
            case 82: return "Heavy rain showers";

            // Snow showers slight and heavy
            case 85: return "Slight snow showers";
            case 86: return "Heavy snow showers";

            // Thunderstorm: Slight or moderate
            case 95: return "Thunderstorms";

            // Thunderstorm with slight and heavy hail
            case 96:
            case 99: return "Thunderstorm with hail";
        }//switch
}//const func

export default getWeatherCodeString;