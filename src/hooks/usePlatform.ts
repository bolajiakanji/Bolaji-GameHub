import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import { FetchResponse } from '../services/api-client'

import platforms from '../data/platform'

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
  

const usePlatform = () => useQuery({
    queryKey: ['platform'],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms}
    
})

export default usePlatform