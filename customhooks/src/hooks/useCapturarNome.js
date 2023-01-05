import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export const useCapturarNome=()=>{

    const [nomes, setNomes]= useState([])

    const requisicao=()=>{
        axios.get(`${BASE_URL}/users`)
        .then((resp)=>{
            setNomes(resp.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
   requisicao()
    },[])

    return nomes

}