import { Button, Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cleanAllCity } from "../Redux/actions";
import CardCity from "./Cards";
import NavBar from "./navBar";
import styled from "@emotion/styled";
const useStyles = styled({
  botonclean: { background: "black" },
});

export default function HomePage() {
  const classes = useStyles();
  const { cities } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div style={{ dislay: "flex" }}>
      <NavBar />
      <Button
        sx={{
          background: "#a7d5d58c",
          "&:hover": { transform: "scale(1.19)" },
        }}
        variant="contained"
        className={classes.botonclean}
        disabled={cities.length === 0}
        onClick={() => {
          dispatch(cleanAllCity());
        }}
      >
        Clean
      </Button>

      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cities.length !== 0 ? (
          cities.map((e, index) => (
            <Grid key={index}>
              <CardCity
                id={e.id}
                name={e.name}
                icon={e.icon}
                temp={e.temp}
                tempmax={e.tempmax}
                tempmin={e.tempmin}
                country={e.country}
              />
            </Grid>
          ))
        ) : (
          <>
            <img
              src="https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x"
              alt="imagen-loading"
              style={{
                width: "150px",
                justifyContent: "center",
                margin: "auto",
                marginTop: "150px",
              }}
            />
          </>
        )}
      </Box>
    </div>
  );
}
