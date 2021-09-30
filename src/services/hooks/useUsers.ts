import { useQuery } from "react-query";
import { getUsers } from "./getUsers";



export function useUser () {
    return useQuery('users', getUsers,{
        staleTime: 1000 * 5
    });
}