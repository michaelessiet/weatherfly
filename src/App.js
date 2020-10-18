import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormPage from "./components/Form";
import Home from "./components/Home";

const api_key = "5b794a89f06d93a3ec386a146c209e2a";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [inputText, setinputText] = useState("");

  const api_call = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <FormPage setCity={setCity} api_call={api_call} city={city} inputText={inputText} setinputText={setinputText} />
      <Home api_call={api_call} weather={weather} />
    </div>
  );
}

export default App;
