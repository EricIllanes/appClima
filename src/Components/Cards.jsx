import { Card, CardMedia } from "@mui/material"


export default function CardCity({id, name, temp, tempmax, tempmin, icon, country}){
    return(<div>
        <Card>
        <h1>{name}</h1>
        <CardMedia
        component="img"
        height="200"
        image={icon}
        alt="myProduct"
      />

        <h2> Temp: {(temp - 275.15).toFixed(1)} °C</h2>
        <h2> Máx: {(tempmax - 275.15).toFixed(1)}°C</h2>
        <h2>Min: {(tempmin - 275.15).toFixed(1)}°C</h2>
        <h4>{country}</h4>
        </Card>

    </div>)
}

/*
      let enviacion = { 
                id: info.data.id,
                name: info.data.name,
                temp: info.data.main.temp,
                tempmax: info.data.main.temp_max,
                tempmin: info.data.main.temp_min,
                icon: info.data.weather[0].icon,
                country: info.data.sys.country
            }
            */