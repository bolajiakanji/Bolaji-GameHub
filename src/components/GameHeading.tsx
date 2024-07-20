import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  let heading;

  if (gameQuery.platform || gameQuery.genre) {
    heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  } else { 
  heading = 'All Games'
}
   

  return (
    <Heading as='h1' marginBottom={5} fontSize='4xl'>{heading}</Heading>
  )
}

export default GameHeading