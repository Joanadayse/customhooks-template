import { useEffect, useState } from "react"
import axios from "axios"


export const useRequestData =(estadoInicial,url)=>{
    const [dados , setdados]= useState(estadoInicial)
  const [carregando , setCarregando]= useState(false)
  const [erro,setErro]= useState(false)

    const requisicao =()=>{
        axios
            .get(url)
            .then((response) => {
              setCarregando(false)
              setdados(response.data);
            })
            .catch((error) => {
              setCarregando(false)
              setErro(true)
              console.log(error);
            });
    }
    
    useEffect(()=>{
        setCarregando(true)
        requisicao()
    },[])
    
    return [dados, carregando,erro]
}