type Props = {
    isCelsius: boolean;
    setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}//type

const TempToggle = ({isCelsius, setIsCelsius}: Props) => {
    return <div>
        <button id='button_celsius' onClick={() => setIsCelsius(!isCelsius)}>
            {isCelsius ? <div><span style={{opacity:'50%'}}>°F</span> / °C</div> : <div>°F / <span style={{opacity:'50%'}}>°C</span></div>}
        </button>
    </div>
};

export default TempToggle;