import React from "react";
import {
    Flex,
    Button,
    Link,
} from "@chakra-ui/react";
import { BiSolidTachometer } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";

const MainSidebar = () => {
    return (
        <Flex 
            flexDirection={"column"} 
            bg={"blackAlpha.800"}
            width={"80px"}
            height={"100vh"}
        >
            <Flex 
                flexDirection={"column"}
                gap={4}
                marginTop={6}
                marginX={2}
            >
                <Button bg={"white"} padding={4} border={"none"} rounded={"full"} as={Link} href="/">
                    <BiSolidTachometer color="black" size={25} />
                </Button>
                <Button bg={"white"} padding={4} border={"none"} rounded={"full"} as={Link} href="/settings">
                    <BsPersonFill color="black" size={25} />
                </Button>
                <Button bg={"white"} padding={4} border={"none"} rounded={"full"}>
                    <GiExitDoor color="black" size={25} />
                </Button>
            </Flex>
        </Flex>
    );
}

export default MainSidebar;