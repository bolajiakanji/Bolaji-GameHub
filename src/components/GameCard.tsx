import React from "react";
import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack margin={1}>
        {game.parent_platforms.map(({ platform}) => <PlatformIconList key={platform.slug} platforms={platform} />)}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
