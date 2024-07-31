import React from "react";
import { Dispatch, SetStateAction } from "react";


interface HamburgerMenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const hamburgerMenuContext = React.createContext<HamburgerMenuContextType>(
  {} as HamburgerMenuContextType
);

export default hamburgerMenuContext;
