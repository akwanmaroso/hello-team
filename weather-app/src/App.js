import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "2b386b7194ac5349d70191a8d85eb2fc";

const App = () => {
  const [state, setState] = useState({
    cuaca: "",
    temperatur: 0,
    pressure: 0,
    humidity: 0,
    city: "",
    search: false,
  });
  const getWeather = async (e) => {
    e.preventDefault();
    const place = e.target.elements.place.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`
    );
    const res = await api_call.json();
    setState({
      cuaca: res.weather[0].main,
      temperatur: res.main.temp,
      pressure: res.main.pressure,
      humidity: res.main.humidity,
      city: res.name,
      search: true,
    });
  };

  return (
    <div className="App">
      <h1>Search Weathers</h1>
      <Form getWeather={getWeather} />
      {state.search ? <Weather weather={state} /> : null}
    </div>
  );
};
export default App;
