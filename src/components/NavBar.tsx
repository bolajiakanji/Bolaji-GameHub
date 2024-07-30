import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";




// interface HamburgerProps {
//   isHamburgerMenuOpen: boolean;
//   onClickHamburgerMenu: () => void;
// }

const NavBar = () => {
  return (
    <HStack padding="10px" z-index={5}>
      <Link to='/'>
      <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>
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
