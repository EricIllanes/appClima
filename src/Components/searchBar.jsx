import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {Button, Input} from "@mui/material"
import { addCity } from "../Redux/actions"
import Swal from 'sweetalert2'

export default function SearchBar() {
    const [search, setSearch] = useState()
    const dispatch= useDispatch()

    function onHandleChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }

    return (<div>
            <Input
            name="search"
            type="text"
            placeholder="Busca tu ciudad"
            value={search}
            onChange={(event) => onHandleChange(event)}
            />
            <Button
            sx={{background:"#93afc7", color:"white"}}
            variant="contained"
            onClick={()=>{
                if (!search){
                    Swal.fire({
                        title: 'Debes escribir algo',
                        text: 'Intenta buscar, por ejemplo, la ciudad desde la que miras esta página',
                        imageUrl: 'https://cdn.betterttv.net/emote/5dd1e881e579cd5efad75f46/3x',
                        imageWidth: 150,
                        imageHeight: 150,
                        imageAlt: 'Custom image',
                      })
                } else {
                    dispatch(addCity(search))
                    setSearch("")
                }
            }}
            >Añadir</Button>
    </div>)
}