import Input from "./Subcomponent/Input"


export default function Body ({handleMeteoUpdate, meteo} ) {

    if (!meteo || !meteo.main) {
        return(
        <Input handleMeteoUpdate={handleMeteoUpdate}/> 
        )
        
    }else{
    const temp = Number.parseFloat(meteo.main.temp-273.15).toFixed(1)
    const tempMax = Number.parseFloat(meteo.main.temp_max-273.15).toFixed(1)
    const tempMin = Number.parseFloat(meteo.main.temp_min-273.15).toFixed(1)



    return(
        <div className="bodyOfBody d-flex flex-column m-0">
           <Input handleMeteoUpdate={handleMeteoUpdate}/> 
           <h3 className="mt-3">{meteo.name}</h3>
           <p>Température: {temp}°c</p>
           <p>Température minimale: {tempMin}°c</p>
           <p>Température maximale: {tempMax}°c</p>
           <p>Humidité: {meteo.main.humidity}%</p>
           <p>recouvrement de nuage: {meteo.clouds.all}%</p>

        </div>
    )
}}