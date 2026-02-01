import React from 'react'
import useData from './useData';
import { platform } from './useGames';

interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms