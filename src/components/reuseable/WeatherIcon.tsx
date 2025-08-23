import { useEffect, useState, useMemo } from "react";

type Props = {
    code: number;
    isDay: boolean;
}//type

const WeatherIcon = ({code, isDay}: Props) => {
        const [iconSrc, setIconSrc]= useState(null);

        const iconName = useMemo(() => {
            switch (code) {
            default:
            case 0:
            case 1:
                return isDay ? "clear-day" : "clear-night";

            case 2:
                return isDay ? "partly-cloudy-day" : "partly-cloudy-night";
            case 3:
                return isDay ? "overcast-day" : "overcast-night";

            case 45:
            case 48:
                return isDay ? "fog-day" : "fog-night";

            case 51:
            case 53:
            case 55:
                return isDay ? "partly-cloudy-day-drizzle" : "partly-cloudy-night-drizzle";

            case 56:
            case 57:
                return isDay ? "partly-cloudy-day-sleet" : "partly-cloudy-night-sleet";

            case 61:
            case 63:
            case 65:
                return isDay ? "partly-cloudy-day-rain" : "partly-cloudy-night-rain";

            case 66:
            case 67:
                return isDay ? "partly-cloudy-day-sleet" : "partly-cloudy-night-sleet";

            case 71:
            case 73:
            case 75:
                return isDay ? "partly-cloudy-day-snow" : "partly-cloudy-night-snow";

            case 77:
                return isDay ? "partly-cloudy-day-snow" : "partly-cloudy-night-snow";

            case 80:
            case 81:
            case 82:
                return isDay ? "partly-cloudy-day-rain" : "partly-cloudy-night-rain";

            case 85:
            case 86:
                return isDay ? "partly-cloudy-day-snow" : "partly-cloudy-night-snow";

            case 95:
                return isDay ? "thunderstorms-day" : "thunderstorms-night";

            case 96:
            case 99:
                return isDay ? "thunderstorms-day-rain" : "thunderstorms-night-rain";
            }
        }, [code, isDay]);

        useEffect(() => {
            import(`../../assets/weather-icons/${iconName}.svg`)
                .then((module) => setIconSrc(module.default))
                .catch((err) => {
                    console.error(".svg file not found: ", err);
                    setIconSrc(null);
                });
        }, [iconName]);

        return iconSrc ? <img src={iconSrc} alt={iconName} height={"64px"}/> : <></>;
};//const func

export default WeatherIcon;