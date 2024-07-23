import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import platforms from '../data/platform'

const apiClient = new APIClient<Platform>('/platforms/list/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
  

const usePlatform = () => useQuery({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms}
    
})

export default usePlatform