import React from "react";
import axios from "axios";
import { useParams } from "react-router" 


export default GameDetailPage = () => {
    
    const { id } = useParams ();
    const { data } = useFetch(
        `http://localhost:3000/catalog/${id}`
    ) 
 
    return (
        <section>
            ывдла
        </section>
    )    
}