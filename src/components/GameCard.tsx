import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Flex
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Flex justifyContent="space-between">
        <HStack margin={1}>
          {game.parent_platforms.map(({ platform }) => (
            <PlatformIconList key={platform.slug} platforms={platform} />
          ))}
        </HStack>
               <CriticScore score={game.metacritic} />
               </Flex>
 
      </CardBody>
    </Card>
  );
};

export default GameCard;
