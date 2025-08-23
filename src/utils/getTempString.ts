// Toggle temperature value between Farenheit/Celsius
const getTempString = (value: number, decimal: number = 0, isCelsius: boolean) => {
        return isCelsius
                ? `${((value - 32) * 5 / 9).toFixed(decimal)}°C`
                : `${value.toFixed(decimal)}°F`
}//const func

export default getTempString;