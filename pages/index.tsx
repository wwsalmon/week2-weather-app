import {useEffect, useState} from "react";
import axios from "axios";
import City from "../components/City";

export function kelvinToF(k: number) {
    return Math.round((k - 276) * 9 / 5 + 32);
}

export default function Index() {
    const [search, setSearch] = useState("");
    const [cities, setCities] = useState<string[]>([]);

    function onSearch() {
        setCities([...cities, search]);
        setSearch("");
    }

    return (
        <>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Enter city name..."/>
            <button onClick={onSearch}>Add</button>
            <div className="flex -mx-8">
                {cities.map(d => (
                    <City city={d}/>
                ))}
            </div>
        </>
    );
}
