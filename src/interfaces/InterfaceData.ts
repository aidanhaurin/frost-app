export default interface InterfaceData {
    location: string;
    state?: string;
    country: string;
    latitude: number;
    longitude: number;
    current: {
        time: Date;
        temperature: number;
        relativeHumidity: number;
        apparentTemperature: number;
        isDay: number;
        precipitation: number;
        windSpeed: number;
        windDirection: number;
        weatherCode: number;
    };
    hourly: {
        time: Date[];
        temperature: Float32Array;
        relativeHumidity: Float32Array;
        apparentTemperature: Float32Array;
        precipitationProbability: Float32Array;
        precipitation: Float32Array;
        weatherCode: Float32Array;
    };
    daily: {
        time: Date[];
        temperatureMax: Float32Array;
        temperatureMin: Float32Array;
        precipitationSum: Float32Array;
        precipitationHours: Float32Array;
        precipitationProbabilityMax: Float32Array;
        weatherCode: Float32Array;
        windSpeedMax: Float32Array;
        windDirection: Float32Array;
    };
}//interface