import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";




// interface HamburgerProps {
//   isHamburgerMenuOpen: boolean;
//   onClickHamburgerMenu: () => void;
// }

const NavBar = () => {
  return (
    <HStack padding="10px" z-index={5}>
      <Image src={logo} boxSize="60px" />
      <SearchInput  />

      <ColorModeSwitch />
{/* <Show below="lg">     <Icons
         isHamburgerMenuOpen={isHamburgerMenuOpen}
         onClickHamburgerMenu={onClickHamburgerMenu}
      />
</Show> */}
 
    </HStack>
  );
};

// const Icons = ({
//   isHamburgerMenuOpen,
//   onClickHamburgerMenu,
// }: HamburgerProps) => {
//   // useEffect(() => {
//   //   onClickHamburgerMenu();
//   // }, []);

//   return (
//     <>
//       {isHamburgerMenuOpen ? (
//         <Icon as={HamburgerIcon} onClick={onClickHamburgerMenu} />
//       ) : (
//         <Icon as={CloseIcon} onClick={onClickHamburgerMenu} />
//       )}
//     </>
//   );
// };
export default NavBar;
