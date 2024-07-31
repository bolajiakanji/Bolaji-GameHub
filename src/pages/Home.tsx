import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import useHamburgerMenu from "../hooks/useHamburgerMenu";

const Home = () => {
  const { isOpen } = useHamburgerMenu();
  return (
    <Grid templateAreas={`"aside main"`} templateColumns="250px 1fr">
      <GridItem
        area="aside"
        pos={{
          base: "absolute",
          lg: "relative",
        }}
        top={{ base: "4.2em", lg: "0" }}
        
        
        zIndex={3}
        width={{ base: isOpen ? '0px': '100%', lg: "100%" }}
        overflowX="hidden"
        
      >
        <Box>
          <GenreList />
        </Box>
      </GridItem>

      <GridItem
        area="main"
        pos={{
          base: "absolute",
          lg: "relative",
        }}
        top={{ base: "4.2em", lg: "0" }}
        opacity={{ base: isOpen ? 1 : 0.02, lg: 1 }}
        
        
        width={{ base: "100%", lg: "ifr" }}
        zIndex={1}
      >
        <Box>
          <GameHeading />
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
  );
};

export default Home;
