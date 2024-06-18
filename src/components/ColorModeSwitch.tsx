import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch
      colorScheme="blue"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
