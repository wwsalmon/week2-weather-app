import axios from "axios";
import { useEffect, useState } from "react";
import { kelvinToF } from "../pages";

export default function City(props: {city: string}) {
    const [weather, setWeather] = useState<{
        main: { temp: number, feels_like: number, temp_min: number, temp_max: number },
        weather: { description: string }[],
        name: string,
    } | null>(null);

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                appid: "cbe2849b7ac1d55771a363b935e306a3",
                q: props.city,
            }
        }).then(res => {
            setWeather(res.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div className="p-4 shadow-md mx-8">
            {weather ? (
                <>
                    <h1 className="text-3xl font-bold">{weather.name}</h1>
                    <p className="uppercase font-bold text-sm mt-8 mb-2">Currently</p>
                    <p className="text-2xl">{kelvinToF(weather.main.temp)} deg F</p>
                    <p className="mb-8 text-2xl">{weather.weather[0].description}</p>
                    <p className="uppercase font-bold text-xs mt-6 mb-1">Feels like</p>
                    <p className="text-xl">{kelvinToF(weather.main.feels_like)} deg F</p>
                    <p className="uppercase font-bold text-xs mt-6 mb-1">Min</p>
                    <p className="text-xl">{kelvinToF(weather.main.temp_min)} deg F</p>
                    <p className="uppercase font-bold text-xs mt-6 mb-1">Max</p>
                    <p className="text-xl">{kelvinToF(weather.main.temp_max)} deg F</p>
                </>
            ) : (
                <p>Loading</p>
            )}
        </div>
    )
}