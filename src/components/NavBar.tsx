import { HStack, Icon, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useHamburgerMenu from "../hooks/useHamburgerMenu";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <HStack paddingX={3} z-index="5">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />

      <ColorModeSwitch  />
      <Show below="lg">
        <MenuIcons />
      </Show>
    </HStack>
  );
};

const MenuIcons = () => {
  const { isOpen, setIsOpen } = useHamburgerMenu();
  

  return (
    <>
      {isOpen ? (
        <Icon as={HamburgerIcon} onClick={() => setIsOpen(!isOpen)}  />
      ) : (
        <Icon as={CloseIcon} onClick={() => setIsOpen(!isOpen)} />
      )}
    </>
  );
};
export default NavBar;
