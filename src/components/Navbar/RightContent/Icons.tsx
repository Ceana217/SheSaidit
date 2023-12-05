import React from "react";

import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsChatDots } from "react-icons/bs";
import useDirectory from "../../../hooks/useDirectory";

type ActionIconsProps = {};

const ActionIcons: React.FC<ActionIconsProps> = () => {
  const { toggleMenuOpen } = useDirectory();
  return (
    <Flex alignItems="center" flexGrow={1}>
      
      <>
        
      </>
    </Flex>
  );
};
export default ActionIcons;
