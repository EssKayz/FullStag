import React, { useState, useEffect } from 'react'
import WeatherMan from './WeatherMan'

const Country = (props) => {
    const [weather, setWeather] = useState([])
    const [condition, setCondition] = useState([])

    const langs = props.langs
        .map((c, i) => <li key={i}>{c.name}</li>)

    const hook = () => {
        WeatherMan.getAll(props)
            .then(response => {
                setWeather(response.data.current)
                setCondition(response.data.current.condition)
                console.log(weather)
            })
    }

    useEffect(hook, [])
    console.log(weather.condition)

    return (
        <>
            <h1>{props.name}</h1>
            <p>capital {props.cap}</p>
            <p>population {props.pop}</p>

            <h2>languages</h2>
            <ul>
                {langs}
            </ul>
            <br />
            <img width="150" src={props.flag} />
            <h2>Weather in {props.cap}</h2>
            <p>Temperature: {weather.temp_c} celsius</p>
            <img src={condition.icon} />
            <p>wind: {weather.wind_kph} kph, direction {weather.wind_dir}</p>
        </>
    )
}



export default Country