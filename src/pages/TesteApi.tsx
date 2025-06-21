import axios from "axios";
import { useEffect, useState } from "react";
 import { getMovies } from './Api/Api';
export const TesteApi = () => {

 const [MoviesApi, setMoviesApi] = useState<any[]>([])


 useEffect(() => {



const FetchMovies = async () => {

const movies = await getMovies();





}
//aqui e debug
console.log(FetchMovies);
FetchMovies();


 }, []);



    return (

        
        <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold underline text-white">TesteApi Page</h1>
        <p className="mt-4 text-lg text-white">This is a test page for API integration.</p>
        </div>
    );
    }