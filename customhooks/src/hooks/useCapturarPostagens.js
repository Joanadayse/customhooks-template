import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/constants"

export const useCapturarPostagens =()=>{
    const [postagens , setPostagens]= useState([])


const requisicao =()=>{
    axios
        .get(`${BASE_URL}/comments`)
        .then((response) => {
          setPostagens(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
}

useEffect(()=>{
    requisicao()
},[])

return postagens

}