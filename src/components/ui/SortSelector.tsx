import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { platform } from "../../hooks/useGames";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by:Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>A</MenuItem>
        <MenuItem>B</MenuItem>
        <MenuItem>C</MenuItem>
        <MenuItem>D</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
