import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'


import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'

import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import { useState } from 'react'

const Home = () => {
    const [isHamburgerMenuOpen] = useState(true);
  return (
    <Grid
      templateAreas={{
         base: `"main"`,

        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "250px 1fr",
        lg: "250px 1fr",
      }}
    >
      {/* <GridItem area="nav">
        <NavBar
          
          onClickHamburgerMenu={() =>
            setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
          }
          isHamburgerMenuOpen={isHamburgerMenuOpen}
        />
      </GridItem> */}
      
        <GridItem
          area="aside"
          pos={{
            base: "absolute",
            lg: "relative",
          }}
          top={{ base: "4.2em", lg: "0" }}
          paddingLeft={3.5}
          opacity={{ base: isHamburgerMenuOpen ? 0 : 1, lg: 1 }} zIndex='3'
        >
          <Box>
            <GenreList
              
            />
          </Box>
        </GridItem>
      
      <GridItem
        area="main"
        pos={{
          base: "absolute",
          lg: "relative",
        }}
        top={{ base: "4.2em", lg: "0" }}
        opacity={{ base: isHamburgerMenuOpen ? 1 : 0.02, lg: 1 }}
        paddingX={3}
        marginTop={["px", "0px"]}
        width={{ base: "100%", lg: "ifr" }}
      >
        <Box paddingX="" left="0px" width="">
          <GameHeading  />
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={5} marginBottom={5}>
            {/* <HStack spacing={5} marginBottom={5}> */}
            <PlatformSelector />
            <SortSelector />
          </SimpleGrid>
          {/* </HStack> */}
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>

  )
}

export default Home