import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreid = useGameQueryStore(s => s.setGenreId)
  return (
    <>
  <Heading fontSize='4xl' marginBottom={5}> Genres</Heading>
      {isLoading && <Spinner />}
      {error && <Text align='center'>{error.message}</Text>}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingBottom={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace='normal'
                textAlign='left'
                onClick={() => setGenreid(genre.id)}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
