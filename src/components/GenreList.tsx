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
import useHamburgerMenu from "../hooks/useHamburgerMenu";
import Genre from "../entities/Genre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreid = useGameQueryStore((s) => s.setGenreId);
  const { isOpen, setIsOpen } = useHamburgerMenu()

  const handleOnclick = (genre: Genre) => {
    setGenreid(genre.id);
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Heading fontSize="4xl" marginBottom={5}>
        {" "}
        Genres
      </Heading>
      {isLoading && <Spinner />}
      {error && <Text align="center">{error.message}</Text>}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingBottom={3}>
            <Button variant="link" onClick={() => handleOnclick(genre)}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                >
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
