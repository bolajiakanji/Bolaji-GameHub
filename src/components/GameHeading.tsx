import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const selectedGenre = useGenre(genreId)

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = usePlatform(platformId)


  let heading;

  if (platformId || genreId) {
    heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
    } Games`;
  } else {
    heading = "All Games";
  }

  return (
    <Heading as="h1" marginBottom={5} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
