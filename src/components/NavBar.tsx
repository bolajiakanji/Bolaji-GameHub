import { HStack, Icon, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

interface HamburgerProps {
  isHamburgerMenuOpen: boolean;
  onClickHamburgerMenu: () => void;
}

const NavBar = ({
  onSearch,
  isHamburgerMenuOpen,
  onClickHamburgerMenu,
}: Props & HamburgerProps) => {
  return (
    <HStack padding="10px" z-index={5}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />

      <ColorModeSwitch />
<Show below="lg">     <Icons
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        onClickHamburgerMenu={onClickHamburgerMenu}
      />
</Show>
 
    </HStack>
  );
};

const Icons = ({
  isHamburgerMenuOpen,
  onClickHamburgerMenu,
}: HamburgerProps) => {
  // useEffect(() => {
  //   onClickHamburgerMenu();
  // }, []);

  return (
    <>
      {isHamburgerMenuOpen ? (
        <Icon as={HamburgerIcon} onClick={onClickHamburgerMenu} />
      ) : (
        <Icon as={CloseIcon} onClick={onClickHamburgerMenu} />
      )}
    </>
  );
};
export default NavBar;
