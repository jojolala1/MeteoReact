import axios from "axios";
import { useState } from "react"

export default function Input({ handleMeteoUpdate}) {

    const [city, setCity] = useState('')

    const handleOnChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = () => {
        console.log("Ville soumise :", city);
        const apiKey = "bdd8a43133f10e9fe54d8f4da33f3458";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        setCity('')

        fetch(axios.apiUrl).then(infoMeteo => infoMeteo.json()).then(data => {
            const meteo = data
            handleMeteoUpdate(meteo)
            console.log(meteo)
        }).catch(error => {
            console.error("erreur lors de la requete à l'api meteo", error)
        })

    };
    return (
        <div className="p-3">
            <input className="form-control my-3" placeholder="saisissez une ville" value={city} onChange={handleOnChange} />
            <button id="btnSubmit" className="btn " onClick={handleSubmit}>soumettre</button>
        </div>
    )
}