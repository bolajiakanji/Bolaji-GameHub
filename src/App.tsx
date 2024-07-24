import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number ;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(true);

  const handleSelctedGenre = (genreId: number) =>
    setGameQuery({ ...gameQuery, genreId });
  const handleSelctedPlatform = (platformId: number) =>
    setGameQuery({ ...gameQuery, platformId });

  return (
    <Grid
      templateAreas={{
        // base: `"nav" "main"`,

        base: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "250px 1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
          onClickHamburgerMenu={() =>
            setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
          }
          isHamburgerMenuOpen={isHamburgerMenuOpen}
        />
      </GridItem>
      {
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
              onSelectGenre={handleSelctedGenre}
              selectedGenreId={gameQuery.genreId}
            />
          </Box>
        </GridItem>
      }
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
          <GameHeading gameQuery={gameQuery} />
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={5} marginBottom={5}>
            {/* <HStack spacing={5} marginBottom={5}> */}
            <PlatformSelector
              onSelectPlatform={handleSelctedPlatform}
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrders={(sortOrder: string) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </SimpleGrid>
          {/* </HStack> */}
        </Box>
        <GameGrid selectedGameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
