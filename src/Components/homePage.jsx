import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardCity from "./Cards";
import NavBar from "./navBar";

export default function HomePage() {
  const { cities } = useSelector((state) => state);
  useEffect(() => {
    console.log(55555, cities);
  }, []);

  return (
    <div>
      <NavBar />
      <Grid>
        {cities.length !== 0 ? (
          cities.map((e, index) => (
            <Grid key={index}>
              <CardCity
                id={e.id}
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
              src="https://c.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif"
              alt="image-loading"
              style={{
                justifyContent: "center",
                height: "50px",
                margin: "auto",
                marginTop: "150px",
              }}
            ></img>
          </>
        )}
      </Grid>
    </div>
  );
}
/*

    <Card>
        <h1>{name}</h1>
        <img src={icon} />
        <h2> Temp: {temp}°C</h2>
        <h2> Máx: {tempmax}</h2>
        <h2>Min: {tempmin}</h2>
        <h4>{country}</h4>
        </Card>

            <Menu />
            <Grid container spacing={2} >
                {
                    (product.length !== 0) ?
                        productToShow.map((e, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4}
                                key={index}>
                                <Card
                                    rating={e.rating}
                                    id={e._id}
                                    sku={e.sku}
                                    name={e.name}
                                    description={e.description}
                                    price={e.price}
                                    quantity={e.quantity}
                                    isOnStock={e.isOnStock}
                                    img={e.img}
                                    category={e.category}
                                    __v={e.__v} />
                            </Grid>

                        )) : <><img
                            src="https://c.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif"
                            alt="image-loading"
                            style={{ justifyContent: "center", height: "50px", margin: "auto", marginTop: "150px" }}
                        ></img></>}
            </Grid>
*/
