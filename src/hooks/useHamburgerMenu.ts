import { useContext } from "react";
import hamburgerMenuContext from "../state-management/context/hamburgerMenuContext";

const useHamburgerMenu = () => useContext(hamburgerMenuContext)

export default useHamburgerMenu