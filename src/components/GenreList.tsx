import { Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const { data: genres, error, isLoading }  = useGenre()
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
    {genres.map(genre => 
        <li key={genre.id}>{genre.name}</li>
    )}
    </ul>
    </>
  )
}

export default GenreList