const Weather = (props) => {
    const cuaca = props.weather;
    return (
        <div>
            <p>City : {cuaca.city}</p>
            <p>Weather : {cuaca.cuaca}</p>
            <p>humidity : {cuaca.humidity}</p>
            <p>pressure : {cuaca.pressure}</p>
            <p>temperatur : {cuaca.temperatur}</p>
        </div>
    )
}

export default Weather;