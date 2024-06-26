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
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        
        <Flex justifyContent="space-between" marginBottom={3}>
        <HStack>
          {game.parent_platforms.map(({ platform }) => (
            <PlatformIconList key={platform.slug} platforms={platform} />
          ))}
        </HStack>
               <CriticScore score={game.metacritic} />
               </Flex>
               <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top} /></Heading>

 
      </CardBody>
    </Card>
  );
};

export default GameCard;
