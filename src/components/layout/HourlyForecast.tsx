import { useEffect, useState } from "react";
import getTempString from "../../utils/getTempString";
import WeatherIcon from "../reuseable/WeatherIcon";

type Props = {
    data: any;
    isCelsius: boolean;
    isDay: boolean;
}

const HourlyForecast = ({data, isCelsius, isDay}: Props) => {

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        //when data changes, get new index for hour range
        const rightNow = new Date().toString();
        for(let i = 0; i < data.time.length; i++){
            if(rightNow.substring(0, 18) === data.time[i].toString().substring(0,18)){
                setIndex(i);
                //console.log(`Time is ${rightNow}\n Index is now ${i}`);
                break;
            }//if
        }//for
    }, [data]);

    return <div>
                <ul className="hourly-forecast">
                {data.time.slice(index, index+6).map((time: Date, i: number) => (
                    <li key={i} className='hourly-1hour'>
                        <WeatherIcon code={data.weatherCode[index + i]} isDay={isDay}/>
                        <strong>{time.toLocaleTimeString([], { hour: 'numeric', hour12: true})}</strong> —&nbsp;
                        {getTempString(data.temperature[index + i], 2, isCelsius)}
                        <br />

                        Feels like: {getTempString(data.apparentTemperature[index + i], 2, isCelsius)}
                        <br />

                        Relative Humidity: {data.relativeHumidity[index + i]}%
                        <br />

                        Chance of Rain: {data.precipitationProbability[index + i]}%
                    </li>
                ))}
                </ul>
            </div>
};

export default HourlyForecast;