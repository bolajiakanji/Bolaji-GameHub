import { Box, Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelctedGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const handleSelctedPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={handleSelctedGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={3}>
          <GameHeading gameQuery={gameQuery} />
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={5} marginBottom={5}>
            {/* <HStack spacing={5} marginBottom={5}> */}
            <PlatformSelector
              onSelectPlatform={handleSelctedPlatform}
              selectedPlatform={gameQuery.platform}
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
