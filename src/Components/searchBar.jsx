import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
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

    useEffect(()=>{
        console.log(search)
    }, [setSearch])

    return (<div>
            <Input
            type="text"
            placeholder="Busca tu ciudad"
            value={search}
            onChange={(event) => onHandleChange(event)}
            />
            <Button 
            variant="contained"
            onClick={()=>{
                if (!search){
                    Swal.fire({
                        title: 'Debes escribir algo',
                        text: '¿Como quieres que te muestre el clima de nada? Invezil',
                        imageUrl: 'https://media.giphy.com/media/kGCuRgmbnO9EI/giphy.gif',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      })
                } else {
                    console.log(111111, search)
                    dispatch(addCity(search))
                    setSearch("")
                }
            }}
            >Añadir</Button>
    </div>)
}