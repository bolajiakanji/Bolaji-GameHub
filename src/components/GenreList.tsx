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
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
  <Heading fontSize='4xl' marginBottom={5}> Genres</Heading>
      {isLoading && <Spinner />}
      {error && <Text align='center'>{error}</Text>}
      <List>
        {data.map((genre) => (
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
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
