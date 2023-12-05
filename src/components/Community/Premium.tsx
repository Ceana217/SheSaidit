import React from "react";
import { Flex, Icon, Text, Stack, Button, Link} from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";

const Premium: React.FC = () => {
  const anyLink = "https://www.youtube.com/watch?v=d1x5GXMdK50&ab_channel=Hidden-Memes";
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex mb={2}>
      <Icon as={GiCheckedShield} fontSize={26} color="red.200" mt={2} />
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>A Little Something</Text>
          <Text>Watch if you dare to (you probably won't)?</Text>
        </Stack>
      </Flex>
      <Link href={anyLink} isExternal>
      <Button height="30px" width="96%" bg="red.200" ml="5px" mr="auto">
        Try Now
      </Button>
      </Link>
    </Flex>
  );
};
export default Premium;