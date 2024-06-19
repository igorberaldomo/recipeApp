import { useEffect,useState } from "react";
import styles from "../css/Search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch"

// quando for deploy isso vai virar a key vai virar uma variavel do sistema
const Key = "6c373fd5e27a4852895fddf7e5e072d9" 
export default function Search({foodData,setFoodData}){
    const [query, setQuery]= useState("");
    // para usar useEffect você passa dois parâmetros, o primeiro e um callbackfunction,()=>{}, o segundo é uma lista de dependencias , [query], já que a lista de dependencias contem query sempre que query for atualizado ele vai executar a função demo
    useEffect(()=>{
         async function  fetchFood(){
            // const res = await fetch(`${URL}?query=${query}&apiKey=${Key}`);
            const data = await res.json();
            setFoodData(data.results)
        }
        fetchFood();
    }, [query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} onChange={(e)=>setQuery(e.target.value)} type="text" value={query} />
        </div>
    )
}