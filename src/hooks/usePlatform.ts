import data from '../data/platform'

// The platform interface below is left for future reference.
// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

const usePlatform = () => ({ data, isLoading: false, error: null})

export default usePlatform