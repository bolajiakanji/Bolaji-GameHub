import { Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const { data, error, isLoading }  = useGenre()
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
    {data.map(genre => 
        <li key={genre.id}>{genre.name}</li>
    )}
    </ul>
    </>
  )
}

export default GenreList