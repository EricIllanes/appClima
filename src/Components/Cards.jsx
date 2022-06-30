import { Card, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCity } from "../Redux/actions";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export default function CardCity({
  id,
  name,
  temp,
  tempmax,
  tempmin,
  icon,
  country,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Joan&family=Pacifico&display=swap"
        rel="stylesheet"
      ></link>
      <Card
        sx={{
          margin: "50px 20px",
          width: "300px",
          "&:hover": { transform: "scale(1.02)" },
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "5px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" fontFamily="Pacifico" fontSize="35px">
              {name}
            </Typography>
            <h4>({country})</h4>
          </div>

          <IconButton
            sx={{
              outline: "red",
              margin: "0 10px",
              size: "500px",
              "&:hover": { transform: "scale(1.15)" },
            }}
            onClick={() => dispatch(deleteCity(id))}
          >
            <CancelPresentationIcon
              sx={{ size: "500px" }}
              fontSize="large"
              color="error"
            />
          </IconButton>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/w/${icon[0].icon}.png`}
            width="80px"
            alt="img"
          />
          <h4>{icon[0].description}</h4>
        </div>

        <h5> Temp: {(temp - 275.15).toFixed(1)} °C</h5>
        <h5> Máx: {(tempmax - 275.15).toFixed(1)}°C</h5>
        <h5>Min: {(tempmin - 275.15).toFixed(1)}°C</h5>
      </Card>
    </div>
  );
}
