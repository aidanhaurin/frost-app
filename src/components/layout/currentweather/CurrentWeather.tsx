import getTempString from '../../../utils/getTempString.ts'
import getWeatherCodeString from '../../../utils/getWeatherCodeString.ts';
import CurrentSubPanel from './CurrentSubPanel.tsx';
import TempToggle from './TempToggle.tsx';
import WeatherIcon from '../../reuseable/WeatherIcon.tsx'

type Props = {
    data: any;
    location: string;
    isCelsius: boolean;
    setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}//type

const CurrentWeather = ({data, location, isCelsius, setIsCelsius}: Props) => {
    return <div id='current_container'>
                <div>
                    <TempToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius}></TempToggle>
                    <div><span className='faux-header'>Current Weather</span> - {location}</div>
                </div>
                <div className='current-content'>
                    <div className='current-content-left'>
                        <div style={{fontSize: "24pt"}}>
                            {getWeatherCodeString(data.weatherCode)}
                        </div>
                        <div className='current-content-temp'>
                            <div className='current-icon'>
                                <WeatherIcon code={data.weatherCode} isDay={data.isDay}/>
                            </div>
                            <div>
                                <p style={{textAlign: "center"}}>
                                    <span style={{fontSize: "54pt"}}>{getTempString(data.temperature, 0, isCelsius)}</span>
                                    <br/>
                                    <span style={{opacity: "70%"}}>(Feels Like {getTempString(data.apparentTemperature, 2, isCelsius)})</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='current-content-right'>
                        <CurrentSubPanel iconClass='bi bi-moisture' panelName='Humidity:' panelStat={data.relativeHumidity + "%"}></CurrentSubPanel>
                        <CurrentSubPanel iconClass='bi bi-wind' panelName='Wind Speed:' panelStat={data.windSpeed.toFixed(2) + " mph"}></CurrentSubPanel>
                    </div>
                </div>
            </div>
};

export default CurrentWeather;