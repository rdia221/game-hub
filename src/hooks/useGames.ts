import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";


export interface platform{
    id:number;
    name:string;
    slug:string;
    //metacritic:number;
}

export interface Game {
  metacritic: number;
  background_image: string ;
  id: number;
  name: string;
  parent_platforms:{platform:platform}[]
}


const useGames = (gameQuery:GameQuery) => useData<Game>('/games',{params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id, 
  ordering:gameQuery.sortOrder
}},[
  gameQuery
])

export default useGames