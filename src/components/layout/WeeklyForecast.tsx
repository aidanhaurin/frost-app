import getTempString from '../../utils/getTempString.ts'
import WeatherIcon from '../reuseable/WeatherIcon.tsx';

type Props = {
    data: any;
    isCelsius: boolean;
    isDay: boolean;
}

const WeeklyForecast = ({data, isCelsius, isDay}: Props) => {
    return <div>
                <ul className="weekly-forecast">
                    {data.time.map((date: Date, i: number) => (
                        <li key={i} className='weekly-1day'>
                            <strong>{date.toLocaleDateString('en-US', { weekday: 'short' })}</strong>:&nbsp;

                            <div className='weekly-subpanel'>
                                <WeatherIcon code={data.weatherCode[i]} isDay={isDay}/>
                                <div>
                                    <p><i className="bi bi-arrow-up"></i> {getTempString(data.temperatureMax[i], 2, isCelsius)}</p>
                                    <p><i className="bi bi-arrow-down"></i> {getTempString(data.temperatureMin[i], 2, isCelsius)}</p>
                                </div>
                            </div>

                            <div className='weekly-subpanel'>
                                <p><i className="bi bi-droplet"></i> {data.precipitationSum[i].toFixed(2)} in</p>
                                <p><i className="bi bi-wind"></i> {data.windSpeedMax[i].toFixed(2)} mph</p>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
};

export default WeeklyForecast;