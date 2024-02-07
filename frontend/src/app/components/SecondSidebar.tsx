import React from "react";
import {
    Button,
    Flex,
    Text,
} from "@chakra-ui/react";
import { FaProjectDiagram } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const SecondSidebar = () => {
    return (
        <Flex 
            flexDirection={"column"}
            bg={"blackAlpha.400"}
            width={"280px"}
            alignItems={"center"}
        >
            <Flex 
                marginTop={6} 
                width={"full"} 
                justifyContent={"center"} 
                alignItems={"center"}
                flexDirection={"column"}
                gap={2}
            >
                <Button justifyContent={"start"} gap={4} width={"90%"}>
                    <FaProjectDiagram size={25} />
                    <Text>Projects</Text>
                </Button>
                <Button justifyContent={"start"} gap={4} width={"90%"}>
                    <IoChatbubbleEllipsesSharp size={25} />
                    <Text>Chat</Text>
                </Button>
            </Flex>
        </Flex>
    );
}

export default SecondSidebar;