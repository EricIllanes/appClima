import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./navBar";

export default function HomePage(){
 const { cities} = useSelector(state => state)

    return (<div>
        <NavBar />

    </div>)
}