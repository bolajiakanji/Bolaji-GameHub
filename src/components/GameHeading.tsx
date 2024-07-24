import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId)
  const selectedPlatform = usePlatform(gameQuery.platformId)

  let heading;

  if (gameQuery.platformId || gameQuery.genreId) {
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
