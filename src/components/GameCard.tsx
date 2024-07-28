import  Game  from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Flex } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card
        _hover={{
          transform: "scale(1.o5)",
          transition: "transform .15s ease-in",
        }}
        borderRadius={10}
        overflow="hidden"
      >
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
          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
