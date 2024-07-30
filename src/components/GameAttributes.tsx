import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItems from "./DefinitionItems";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItems term="Platform">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItems>
      <DefinitionItems term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Publisher(s)">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
