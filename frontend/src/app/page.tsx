import { Box, Flex } from "@chakra-ui/layout";
import MainSidebar from "./components/MainSidebar";
import SecondSidebar from "./components/SecondSidebar";

export default function Home() {
  return (
    <Box>
      <Flex>
        <MainSidebar />
        <SecondSidebar />
      </Flex>
    </Box>
  );
}
